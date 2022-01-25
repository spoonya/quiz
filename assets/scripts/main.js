import { data } from "./data.js";

const questions = {
  sites: "sites",
  packages: "packages",
  engines: "engines",
  design: "design",
};

class Quiz {
  constructor(selector, data) {
    this._quiz = document.querySelector(selector);
    this._question = this._quiz.querySelector("#quiz-question");
    this._answers = this._quiz.querySelector("#quiz-answers");
    this._controls = this._quiz.querySelector("#quiz-controls");
    this._nextBtn = this._controls.querySelector("#quiz-controls-next");
    this._prevBtn = this._controls.querySelector("#quiz-controls-prev");
    this._resultContainer = this._quiz.querySelector("#quiz-result");
    this._descrip = this._quiz.querySelector("#quiz-descrip");
    this._services = this._quiz.querySelector("#quiz-services");
    this._costPerHour = {
      design: this._quiz.querySelector("#quiz-design-per-hour").value,
      frontend: this._quiz.querySelector("#quiz-frontend-per-hour").value,
      backend: this._quiz.querySelector("#quiz-backend-per-hour").value,
    };
    this._data = _.merge({}, data);
    this._resultData = {
      site: "",
      services: [],
      cms: "",
      design: "",
      cost: "",
    };
    this._questionNumber = 0;
    this._devBranch = "";
    this._packageBranch = "";
    this._nextQuestion = "";
    this._prevQuestion = "";
  }

  _controlPackagesInputs(radio) {
    this._packageBranch = radio.dataset.quizPackageBranch;

    this._data.packages.types[this._packageBranch].input.checked = true;

    for (const [key, value] of Object.entries(this._data.packages.types)) {
      if (this._packageBranch !== key) {
        value.input.checked = false;
      }
    }

    this._createDescrip(
      this._data.sites[this._devBranch].packages.types[this._packageBranch]
        .descrip
    );

    if (this._packageBranch === "personal" && this._devBranch !== "landing") {
      this._createServices(
        this._data.sites[this._devBranch].packages.types[this._packageBranch]
          .inputs
      );

      this._services
        .querySelectorAll("input[type='checkbox']")
        .forEach((checkbox) => {
          checkbox.addEventListener("change", () => {
            const packageName = checkbox.value;

            for (const [_, value] of Object.entries(
              this._data.sites[this._devBranch].packages.types[
                this._packageBranch
              ].inputs
            )) {
              if (value.value === packageName) {
                if (checkbox.checked) {
                  value.checked = true;
                } else {
                  value.checked = false;
                }
              }
            }
          });
        });
    }
  }

  _createQuestion(question, checkedInput) {
    if (checkedInput) {
      if (checkedInput.dataset.quizDevBranch) {
        this._devBranch = checkedInput.dataset.quizDevBranch;
      }

      if (checkedInput.dataset.quizPackageBranch) {
        this._packageBranch = checkedInput.dataset.quizPackageBranch;
      }
    }

    this._clearAnswers();

    switch (question) {
      case questions.sites:
        this._question.innerText = data.initQuestionLabel;

        this._createAnswers(this._data.sites, {
          nextQuestion: questions.packages,
          devBranch: true,
        });

        this._answers.querySelectorAll("input").forEach((radio) => {
          radio.addEventListener("change", () => {
            const site = radio.dataset.quizDevBranch;

            this._data.sites[site].input.checked = true;

            for (const [key, value] of Object.entries(this._data.sites)) {
              if (site !== key) {
                value.input.checked = false;
              }
            }
          });
        });

        break;

      case questions.packages:
        this._question.innerText = this._data.packages.question;

        this._prevQuestion = questions.sites;

        this._createAnswers(this._data.packages.types, {
          nextQuestion: this._data.sites[this._devBranch].packages.nextQuestion,
          packageBranch: true,
        });

        this._answers
          .querySelectorAll("input[type='radio']")
          .forEach((radio) => {
            if (radio.checked) {
              this._controlPackagesInputs(radio);
            }

            radio.addEventListener("change", () => {
              this._controlPackagesInputs(radio);
            });
          });

        break;

      case questions.engines:
        this._question.innerText =
          this._data.sites[this._devBranch].engines.question;

        this._prevQuestion = questions.packages;

        this._createAnswers(this._data.sites[this._devBranch].engines.types, {
          nextQuestion: this._data.sites[this._devBranch].engines.nextQuestion,
        });

        this._answers.querySelectorAll("input").forEach((radio) => {
          radio.addEventListener("change", () => {
            const engineName = radio.value;

            for (const [_, value] of Object.entries(
              this._data.sites[this._devBranch].engines.types
            )) {
              if (value.value === engineName) {
                value.checked = true;
              } else {
                value.checked = false;
              }
            }
          });
        });

        break;

      case questions.design:
        this._question.innerText = this._data.design.question;

        this._prevQuestion = questions.engines;

        this._createAnswers(this._data.design.types, {
          nextQuestion: this._data.design.nextQuestion,
        });

        this._answers.querySelectorAll("input").forEach((radio) => {
          radio.addEventListener("change", () => {
            const design = radio.value;

            for (const [_, value] of Object.entries(this._data.design.types)) {
              if (value.value === design) {
                value.checked = true;
              } else {
                value.checked = false;
              }
            }
          });
        });

        break;

      default:
        this._question.innerText = "Результат";
        this._hideControls();
        this._createResult();
        break;
    }
  }

  _createInput({
    label,
    type,
    name,
    value,
    checked,
    devBranch,
    packageBranch,
    nextQuestion,
    prevQuestion,
  }) {
    const inputTemplate = `<div class="form__control">
                            <label class="form__checkbox-wrapper">
                              <input
                                class="form__checkbox"
                                type="${type}"
                                name="${name}"
                                value="${value}"
                                ${checked ? "checked" : ""}
                                data-quiz-dev-branch="${devBranch}"
                                data-quiz-package-branch="${
                                  packageBranch ? packageBranch : ""
                                }"
                                data-quiz-next-question="${
                                  nextQuestion ? nextQuestion : ""
                                }"
                                data-quiz-prev-question="${
                                  prevQuestion ? prevQuestion : ""
                                }"
                                hidden="hidden"
                              />
                              <span class="form__checkbox-styled"></span>
                              <span class="form__checkbox-txt">${label}</span>
                              <span class="form__error"></span>
                            </label>
                          </div>`;

    return inputTemplate;
  }

  _createDescrip(obj) {
    this._clearDescrip();
    this._clearServices();

    for (const [_, value] of Object.entries(obj)) {
      this._descrip.insertAdjacentHTML("beforeend", `<li>${value}</li>`);
    }
  }

  _initPrevButton() {
    this._prevBtn.addEventListener("click", () => {
      let input;

      if (this._answers.querySelector("input:checked")) {
        input = this._answers.querySelector("input:checked");
      } else {
        input = this._answers.querySelector("input");
      }

      this._questionNumber -= 1;
      this._displayPrevButton();

      if (this._prevQuestion === questions.packages) {
        this._descrip.classList.add("active");
        this._services.classList.add("active");
      } else {
        this._descrip.classList.remove("active");
        this._services.classList.remove("active");
      }

      this._createQuestion(this._prevQuestion, input);
    });
  }

  _initNextButton() {
    this._nextBtn.addEventListener("click", () => {
      const checkedInput = this._answers.querySelector("input:checked");

      if (!checkedInput) return;

      this._nextQuestion = checkedInput.dataset.quizNextQuestion;

      this._questionNumber += 1;
      this._displayPrevButton();

      if (this._nextQuestion === questions.packages) {
        this._descrip.classList.add("active");
        this._services.classList.add("active");
      } else {
        this._descrip.classList.remove("active");
        this._services.classList.remove("active");
      }

      this._createQuestion(this._nextQuestion, checkedInput);
    });
  }

  _appendResult(label, result) {
    this._resultContainer.insertAdjacentHTML(
      "beforeend",
      `<p><span>${label}: </span>${result}<p>`
    );
  }

  _createResultSite() {
    const site = this._data.sites[this._devBranch].input;
    this._resultData.site = site.label.toLowerCase();

    this._appendResult("Тип сайта", site.label.toLowerCase());
  }

  _createResultServices() {
    const staticServices = this._data.sites[this._devBranch].packages.types[
      this._packageBranch
    ].descrip.map((service) => " " + service.toLowerCase());

    const dynamicServices = this._data.sites[this._devBranch].packages.types[
      this._packageBranch
    ].inputs
      ?.filter(({ checked }) => checked === true)
      .map((service) => " " + service.label.toLowerCase());

    this._resultData.services = dynamicServices
      ? staticServices.concat(dynamicServices)
      : staticServices;

    this._appendResult("Функционал", this._resultData.services);
  }

  _createResultEngine() {
    if (!this._data.sites[this._devBranch].engines) return;

    const engine = this._data.sites[this._devBranch].engines.types.find(
      ({ checked }) => checked === true
    );

    this._resultData.cms = engine.label;

    this._appendResult("CMS", engine.label);
  }

  _createResultDesign() {
    const design = this._data.design.types.find(
      ({ checked }) => checked === true
    );

    if (!design) return;

    this._resultData.design = design.label.toLowerCase();

    this._appendResult("Дизайн", design.label.toLowerCase());
  }

  _createResultCost() {
    const calcWithoutAdditionalServices = () => {
      const hours =
        this._data.sites[this._devBranch].packages.types[this._packageBranch]
          .hours;

      return (cost =
        hours.design * this._costPerHour.design +
        hours.frontend * this._costPerHour.frontend +
        hours.backend * this._costPerHour.backend);
    };

    const calcWithAdditionalServices = () => {};

    let cost = 0;

    switch (this._devBranch) {
      case "landing":
        cost = calcWithoutAdditionalServices();
        break;

      case "promo":
        switch (this._packageBranch) {
          case "standard":
            cost = calcWithoutAdditionalServices();
            break;

          case "expanded":
            cost = calcWithoutAdditionalServices();
            break;

          case "personal":
            cost = calcWithAdditionalServices();
            break;

          default:
            break;
        }
        break;

      case "catalog":
        switch (this._packageBranch) {
          case "standard":
            cost = calcWithoutAdditionalServices();
            break;

          case "expanded":
            cost = calcWithoutAdditionalServices();
            break;

          case "personal":
            cost = calcWithAdditionalServices();
            break;

          default:
            break;
        }
        break;

      case "store":
        switch (this._packageBranch) {
          case "standard":
            cost = calcWithoutAdditionalServices();
            break;

          case "expanded":
            cost = calcWithoutAdditionalServices();
            break;

          case "personal":
            cost = calcWithAdditionalServices();
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }

    this._appendResult("Стоимость", `${cost} BYN`);
  }

  _createPdf() {
    this._resultContainer.insertAdjacentHTML(
      "beforeend",
      `<button id="quiz-pdf-generator" type='button'>Скачать PDF-документ</button>`
    );

    const pdfButton = this._resultContainer.querySelector(
      "#quiz-pdf-generator"
    );

    var externalDataRetrievedFromServer = [
      { name: "Bartek", age: 34 },
      { name: "John", age: 27 },
      { name: "Elizabeth", age: 30 },
    ];

    function buildTableBody(data, columns) {
      const body = [];

      body.push(columns);

      data.forEach((row) => {
        const dataRow = [];

        columns.forEach((column) => {
          dataRow.push(row[column].toString());
        });

        body.push(dataRow);
      });

      return body;
    }

    function table(data, columns) {
      return {
        table: {
          headerRows: 1,
          body: buildTableBody(data, columns),
        },
      };
    }

    const docDefinition = {
      content: [
        { text: "Перечень услуг", style: "header" },
        table(externalDataRetrievedFromServer, ["name", "age"]),
      ],
      styles: {
        table: {},
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        tableHeader: {
          bold: true,
          fontSize: 14,
        },
        total: {
          bold: true,
        },
      },
    };

    pdfButton.addEventListener("click", () =>
      pdfMake.createPdf(docDefinition).download("cost.pdf")
    );
  }

  _clearAnswers() {
    this._answers.innerHTML = "";
  }

  _clearDescrip() {
    this._descrip.innerHTML = "";
  }

  _clearServices() {
    this._services.innerHTML = "";
  }

  _displayPrevButton() {
    if (this._questionNumber) {
      this._prevBtn.classList.add("active");
    } else {
      this._prevBtn.classList.remove("active");
    }
  }

  _hideControls() {
    this._controls.classList.add("hidden");
  }

  _createResult() {
    this._resultContainer.classList.add("active");

    this._createResultSite();
    this._createResultServices();
    this._createResultEngine();
    this._createResultDesign();
    this._createResultCost();
    this._createPdf();
    console.log(this._resultData);
  }

  _createServices(obj) {
    this._clearServices();

    for (const [_, value] of Object.entries(obj)) {
      this._services.insertAdjacentHTML(
        "beforeend",
        this._createInput({
          label: value.input ? value.input.label : value.label,
          type: value.input ? value.input.type : value.type,
          name: value.input ? value.input.name : value.name,
          value: value.input ? value.input.value : value.value,
          checked: value.input ? value.input.checked : value.checked,
        })
      );
    }
  }

  _createAnswers(
    obj,
    {
      nextQuestion = "",
      prevQuestion = this._prevQuestion,
      devBranch = false,
      packageBranch = false,
    }
  ) {
    for (const [key, value] of Object.entries(obj)) {
      this._answers.insertAdjacentHTML(
        "beforeend",
        this._createInput({
          label: value.input ? value.input.label : value.label,
          type: value.input ? value.input.type : value.type,
          name: value.input ? value.input.name : value.name,
          value: value.input ? value.input.value : value.value,
          checked: value.input ? value.input.checked : value.checked,
          devBranch: devBranch ? key : this._devBranch,
          packageBranch: packageBranch ? key : this._packageBranch,
          nextQuestion: nextQuestion,
          prevQuestion: prevQuestion,
        })
      );
    }
  }

  init() {
    this._createQuestion(data.initQuestion);
    this._initNextButton();
    this._initPrevButton();
  }
}

const quiz = new Quiz("#quiz", data);
quiz.init();
