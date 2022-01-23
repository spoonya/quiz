import { data } from "./data.js";

class Quiz {
  constructor(selector, data) {
    this._quiz = document.querySelector(selector);
    this._question = this._quiz.querySelector("#quiz-question");
    this._answers = this._quiz.querySelector("#quiz-answers");
    this._controls = this._quiz.querySelector("#quiz-controls");
    this._nextBtn = this._controls.querySelector("#quiz-controls-next");
    this._prevBtn = this._controls.querySelector("#quiz-controls-prev");
    this._resultContainer = this._quiz.querySelector("#quiz-result");
    this._questionNumber = 0;
    this._data = _.merge({}, data);
    this._devBranch = "";
    this._packageBranch = "";
    this._nextQuestion = "";
    this._prevQuestion = "";
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

  _clearAnswers() {
    this._answers.innerHTML = "";
  }

  _appendResult(label, result) {
    this._resultContainer.insertAdjacentHTML(
      "beforeend",
      `<p><span>${label}: </span>${result}<p>`
    );
  }

  _createResultSite() {
    const site = this._data.sites[this._devBranch].input;

    this._appendResult("Тип сайта", site.label.toLowerCase());
  }

  _createResultServices() {
    const services = this._data.sites[this._devBranch].packages.types[
      this._packageBranch
    ]
      .filter(({ checked }) => checked === true)
      .map((service) => " " + service.label.toLowerCase());

    this._appendResult("Функционал", services);
  }

  _createResultEngine() {
    if (!this._data.sites[this._devBranch].engines) return;

    const engine = this._data.sites[this._devBranch].engines.types.find(
      ({ checked }) => checked === true
    );

    this._appendResult("CMS", engine.label);
  }

  _createResultDesign() {
    const design = this._data.design.types.find(
      ({ checked }) => checked === true
    );

    this._appendResult("Дизайн", design.label.toLowerCase());
  }

  _createResultCost() {
    this._appendResult("Стоимость", "1000 BYN");
  }

  _createResult() {
    this._resultContainer.classList.add("active");

    this._createResultSite();
    this._createResultServices();
    this._createResultEngine();
    this._createResultDesign();
    this._createResultCost();
  }

  _createQuestion(question, checkedInput) {
    if (checkedInput) {
      if (checkedInput.dataset.quizDevBranch) {
        this._devBranch = checkedInput.dataset.quizDevBranch;
      }

      if (checkedInput.dataset.quizPackageBranch) {
        this._packageBranch = checkedInput.dataset.quizPackageBranch;
      }

      this._nextQuestion = checkedInput.dataset.quizNextQuestion;
    }

    this._clearAnswers();

    switch (question) {
      case "sites":
        this._question.innerText = data.initQuestionLabel;

        for (const [key, value] of Object.entries(this._data.sites)) {
          this._answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.input.label,
              type: value.input.type,
              name: value.input.name,
              value: value.input.value,
              checked: value.input.checked,
              devBranch: key,
              nextQuestion: "packages",
            })
          );
        }

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

      case "packages":
        this._question.innerText = this._data.packages.question;

        this._prevQuestion = "sites";

        for (const [key, value] of Object.entries(this._data.packages.types)) {
          this._answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.input.label,
              type: value.input.type,
              name: value.input.name,
              value: value.input.value,
              checked: value.input.checked,
              devBranch: this._devBranch,
              packageBranch: key,
              nextQuestion: this._data.packages.nextQuestion,
              prevQuestion: this._prevQuestion,
            })
          );
        }

        this._answers.querySelectorAll("input").forEach((radio) => {
          radio.addEventListener("change", () => {
            const packageBranch = radio.dataset.quizPackageBranch;

            this._data.packages.types[packageBranch].input.checked = true;

            for (const [key, value] of Object.entries(
              this._data.packages.types
            )) {
              if (packageBranch !== key) {
                value.input.checked = false;
              }
            }
          });
        });

        break;

      case "services":
        this._question.innerText =
          this._data.sites[this._devBranch].packages.question;

        this._prevQuestion = "packages";

        for (const [_, value] of Object.entries(
          this._data.sites[this._devBranch].packages.types[this._packageBranch]
        )) {
          this._answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.label,
              type: value.type,
              name: value.name,
              value: value.value,
              checked: value.checked,
              devBranch: this._devBranch,
              packageBranch: this._packageBranch,
              nextQuestion:
                this._data.sites[this._devBranch].packages.nextQuestion,
              prevQuestion: this._prevQuestion,
            })
          );
        }

        this._answers.querySelectorAll("input").forEach((checkbox) => {
          checkbox.addEventListener("change", () => {
            const packageName = checkbox.value;

            for (const [_, value] of Object.entries(
              this._data.sites[this._devBranch].packages.types[
                this._packageBranch
              ]
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

        break;

      case "engines":
        this._question.innerText =
          this._data.sites[this._devBranch].engines.question;

        this._prevQuestion = "services";

        for (const [_, value] of Object.entries(
          this._data.sites[this._devBranch].engines.types
        )) {
          this._answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.label,
              type: value.type,
              name: value.name,
              value: value.value,
              checked: value.checked,
              devBranch: this._devBranch,
              packageBranch: this._packageBranch,
              nextQuestion:
                this._data.sites[this._devBranch].engines.nextQuestion,
              prevQuestion: this._prevQuestion,
            })
          );
        }

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

      case "design":
        this._question.innerText = this._data.design.question;

        if (this._devBranch !== "landing") {
          this._prevQuestion = "engines";
        } else {
          this._prevQuestion = "services";
        }

        for (const [_, value] of Object.entries(this._data.design.types)) {
          this._answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.label,
              type: value.type,
              name: value.name,
              value: value.value,
              checked: value.checked,
              devBranch: this._devBranch,
              packageBranch: this._packageBranch,
              nextQuestion: this._data.design.nextQuestion,
              prevQuestion: this._prevQuestion,
            })
          );
        }

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
        this._hideControls();
        this._question.innerText = "Результат";
        this._createResult();
        break;
    }
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

      this._createQuestion(this._nextQuestion, checkedInput);
    });
  }

  init() {
    this._initNextButton();
    this._initPrevButton();

    this._createQuestion(data.initQuestion);
  }
}

const quiz = new Quiz("#quiz", data);
quiz.init();
