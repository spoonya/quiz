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
      design: +this._quiz.querySelector("#quiz-design-per-hour").value,
      frontend: +this._quiz.querySelector("#quiz-frontend-per-hour").value,
      backend: +this._quiz.querySelector("#quiz-backend-per-hour").value,
    };
    this._data = _.merge({}, data);
    this._pdfDataServices = {
      static: [],
      dynamic: [],
    };
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

  _createInput(
    {
      label,
      type,
      name,
      value,
      checked,
      devBranch,
      packageBranch,
      nextQuestion,
      prevQuestion,
    },
    isSmall = false
  ) {
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
                              <span class="form__checkbox-styled ${
                                isSmall ? "form__checkbox-styled--small" : ""
                              }">
                              </span>
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

  _createPdfData() {
    const staticServices =
      this._data.sites[this._devBranch].packages.types[this._packageBranch]
        .descrip;

    const createStaticServices = (services, dynamicServicesCost = 0) => {
      for (let i = 0; i < services.length; i++) {
        const label = services[i];

        this._pdfDataServices.static.push({
          service: label,
          cost: this._resultData.cost - dynamicServicesCost,
        });
      }
    };

    const createDynamicServices = (services) => {
      let additionalServicesCost = 0;

      for (let i = 0; i < services.length; i++) {
        const label = services[i].label;
        const hours = services[i].hours;

        let cost = hours * this._costPerHour.backend;
        additionalServicesCost += cost;

        this._pdfDataServices.dynamic.push({
          service: label,
          cost,
        });
      }

      return additionalServicesCost;
    };

    switch (this._devBranch) {
      case "landing":
        createStaticServices(staticServices);
        break;

      default:
        switch (this._packageBranch) {
          case "standard":
            createStaticServices(staticServices);
            break;

          case "expanded":
            createStaticServices(staticServices);
            break;

          case "personal":
            const dynamicServices = this._data.sites[
              this._devBranch
            ].packages.types[this._packageBranch].inputs.filter(
              ({ checked }) => checked === true
            );

            const additionalServicesCost =
              createDynamicServices(dynamicServices);
            createStaticServices(staticServices, additionalServicesCost);
            break;

          default:
            break;
        }
        break;
    }
  }

  _createResultCost() {
    const calcLanding = () => {
      const hours =
        this._data.sites[this._devBranch].packages.types[this._packageBranch]
          .hours;

      const cmsHours = this._data.sites[this._devBranch].engines.types.find(
        ({ checked }) => checked === true
      ).hours;

      this._resultData.cost =
        hours.design * this._costPerHour.design +
        hours.frontend * this._costPerHour.frontend +
        (hours.backend + cmsHours) * this._costPerHour.backend;
    };

    const calcWithoutAdditionalServices = () => {
      const cmsHours = this._data.sites[this._devBranch].engines.types.find(
        ({ checked }) => checked === true
      ).hours[this._packageBranch];

      if (this._resultData.design === "шаблон") {
        this._resultData.cost = cmsHours * this._costPerHour.backend;
      } else {
        const designHours = this._data.design.types.find(
          ({ checked }) => checked === true
        ).hours[this._devBranch];

        this._resultData.cost =
          cmsHours * this._costPerHour.backend +
          designHours.design * this._costPerHour.design +
          designHours.frontend * this._costPerHour.frontend;
      }
    };

    const calcWithAdditionalServices = () => {
      const cmsHours = this._data.sites[this._devBranch].engines.types.find(
        ({ checked }) => checked === true
      ).hours[this._packageBranch];

      const servicesHours = this._data.sites[this._devBranch].packages.types[
        this._packageBranch
      ].inputs
        .filter(({ checked }) => checked === true)
        .reduce((acc, next) => acc + next.hours, 0);

      const backendHours = cmsHours + servicesHours;

      if (this._resultData.design === "шаблон") {
        this._resultData.cost = backendHours * this._costPerHour.backend;
      } else {
        const designHours = this._data.design.types.find(
          ({ checked }) => checked === true
        ).hours[this._devBranch];

        this._resultData.cost =
          backendHours * this._costPerHour.backend +
          designHours.design * this._costPerHour.design +
          designHours.frontend * this._costPerHour.frontend;
      }
    };

    switch (this._devBranch) {
      case "landing":
        calcLanding();
        break;

      default:
        switch (this._packageBranch) {
          case "standard":
            calcWithoutAdditionalServices();
            break;

          case "expanded":
            calcWithoutAdditionalServices();
            break;

          case "personal":
            calcWithAdditionalServices();
            break;

          default:
            break;
        }
        break;
    }

    this._appendResult("Стоимость", `${this._resultData.cost} BYN`);
  }

  _createPdf() {
    this._createPdfData();

    this._resultContainer.insertAdjacentHTML(
      "beforeend",
      `<button id="quiz-pdf-generator" type='button'>Скачать PDF-документ</button>`
    );

    const pdfButton = this._resultContainer.querySelector(
      "#quiz-pdf-generator"
    );

    const getPropValueByKey = (obj, str) => {
      str = str.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
      str = str.replace(/^\./, ""); // strip a leading dot
      const arr = str.split(".");

      for (let i = 0; i < arr.length; ++i) {
        let key = arr[i];

        if (key in obj) {
          obj = obj[key];
        } else {
          return;
        }
      }
      return obj;
    };

    const buildTableBody = ({ cols, showHeaders, headers }) => {
      const body = [];
      // Inserting headers
      if (showHeaders) {
        body.push(headers);
      }

      // Inserting items from personal services
      this._pdfDataServices.static.forEach((row) => {
        const dataRow = [];
        let i = 0;
        let margin = [0, 0, 0, 0];

        cols.forEach((col) => {
          let span = 0;
          const rowHeight = 8;

          if (col === "cost") {
            span = this._pdfDataServices.static.length;
            margin = [0, rowHeight * span, 0, 0];

            dataRow.push({
              text: getPropValueByKey(row, col),
              alignment: "center",
              rowSpan: span,
              margin,
            });
          } else {
            dataRow.push({
              text: getPropValueByKey(row, col),
              alignment: headers[i].alignmentChild,
            });
          }

          i++;
        });
        body.push(dataRow);
      });

      // Inserting items from standard/expanded services
      this._pdfDataServices.dynamic.forEach((row) => {
        const dataRow = [];
        let i = 0;

        cols.forEach((col) => {
          if (col === "cost") {
            dataRow.push({
              text: getPropValueByKey(row, col),
              alignment: "center",
            });
          } else {
            dataRow.push({
              text: getPropValueByKey(row, col),
              alignment: headers[i].alignmentChild,
            });
          }

          i++;
        });
        body.push(dataRow);
      });

      return body;
    };

    const table = ({ cols, width, showHeaders, headers, layoutDef }) => {
      return {
        table: {
          headerRows: 1,
          widths: width,
          body: buildTableBody({ cols, showHeaders, headers }),
        },
        layout: layoutDef,
      };
    };

    const basicInfo = [
      `Тип сайта: ${this._resultData.site}\n`,
      `CMS: ${this._resultData.cms}\n`,
      this._resultData.design ? `Дизайн: ${this._resultData.design}` : "",
    ];

    const docDefinition = {
      content: [
        {
          width: 140,
          margin: [0, 0, 0, 15],
          alignment: "right",
          image:
            "data:image/png;base64,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",
        },
        { text: "О сайте", style: "mainTitle" },
        { text: basicInfo[0], style: "basicInfo" },
        { text: basicInfo[1], style: "basicInfo" },
        { text: basicInfo[2], style: "basicInfo" },
        { text: "Перечень услуг", style: "tableTitle" },
        table({
          cols: ["service", "cost"],
          width: ["*", 120],
          showHeaders: true,
          headers: [
            {
              text: "Услуга",
              bold: true,
              fontSize: 14,
              alignmentChild: "left",
            },
            {
              text: "Стоимость, BYN",
              bold: true,
              fontSize: 14,
              alignmentChild: "left",
            },
          ],
          layoutDef: "",
        }),
        { text: `Итого: ${this._resultData.cost} BYN`, style: "total" },
      ],
      styles: {
        mainTitle: {
          alignment: "left",
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 15],
        },
        basicInfo: {
          margin: [0, 0, 0, 5],
        },
        tableTitle: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 10],
        },
        total: {
          bold: true,
          fontSize: 14,
          margin: [0, 10, 0, 0],
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
  }

  _createServices(obj) {
    this._clearServices();

    for (const [_, value] of Object.entries(obj)) {
      this._services.insertAdjacentHTML(
        "beforeend",
        this._createInput(
          {
            label: value.input ? value.input.label : value.label,
            type: value.input ? value.input.type : value.type,
            name: value.input ? value.input.name : value.name,
            value: value.input ? value.input.value : value.value,
            checked: value.input ? value.input.checked : value.checked,
          },
          true
        )
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
