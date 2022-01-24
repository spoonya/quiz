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
          nextQuestion:
            this._devBranch !== "landing"
              ? this._data.packages.nextQuestion
              : this._data.sites[this._devBranch].packages.nextQuestion,
          packageBranch: true,
        });

        this._answers
          .querySelectorAll("input[type='radio']")
          .forEach((radio) => {
            if (radio.checked) {
              this._packageBranch = radio.dataset.quizPackageBranch;

              this._data.packages.types[
                this._packageBranch
              ].input.checked = true;

              for (const [key, value] of Object.entries(
                this._data.packages.types
              )) {
                if (this._packageBranch !== key) {
                  value.input.checked = false;
                }
              }

              this._createDescrip(
                this._data.sites[this._devBranch].packages.types[
                  this._packageBranch
                ].descrip
              );

              if (
                this._packageBranch === "personal" &&
                this._devBranch !== "landing"
              ) {
                this._createServices(
                  this._data.sites[this._devBranch].packages.types[
                    this._packageBranch
                  ].inputs
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

            radio.addEventListener("change", () => {
              this._packageBranch = radio.dataset.quizPackageBranch;

              this._data.packages.types[
                this._packageBranch
              ].input.checked = true;

              for (const [key, value] of Object.entries(
                this._data.packages.types
              )) {
                if (this._packageBranch !== key) {
                  value.input.checked = false;
                }
              }

              this._createDescrip(
                this._data.sites[this._devBranch].packages.types[
                  this._packageBranch
                ].descrip
              );

              if (
                this._packageBranch === "personal" &&
                this._devBranch !== "landing"
              ) {
                this._createServices(
                  this._data.sites[this._devBranch].packages.types[
                    this._packageBranch
                  ].inputs
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
    this._resultData.cost = 1000;

    this._appendResult("Стоимость", "BYN");
  }

  _createPdfLink() {
    this._resultContainer.insertAdjacentHTML(
      "beforeend",
      `<a href="#" download>Скачать PDF-документ</a>`
    );
  }

  _createPdf() {
    const docDefinition = {
      content: [
        "First paragraph",
        "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
      ],
    };

    const pdf = pdfMake.createPdf(docDefinition);
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
    this._createPdfLink();
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
