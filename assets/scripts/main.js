const data = {
  initQuestionLabel: "Тип сайта",
  initQuestion: "sites",
  packages: {
    question: "Тип пакета",
    nextQuestion: "services",
    types: {
      standard: {
        input: {
          label: "Стандартный",
          name: "пакет услуг",
          type: "radio",
          value: "стандартный",
          checked: false,
        },
      },
      expanded: {
        input: {
          label: "Расширенный",
          name: "пакет услуг",
          type: "radio",
          value: "расширенный",
          checked: false,
        },
      },
      personal: {
        input: {
          label: "Персональный",
          name: "пакет услуг",
          type: "radio",
          value: "персональный",
          checked: false,
        },
      },
    },
  },
  sites: {
    landing: {
      input: {
        label: "Лендинг",
        name: "тип сайта",
        type: "radio",
        value: "лендинг",
        checked: false,
      },
      packages: {
        question: "Функционал",
        nextQuestion: "design",
        types: {
          standard: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот (Chatra или другой)",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка на любой удобной CRM",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
          expanded: [
            {
              label: "уникальный дизайн",
              name: "уникальный дизайн",
              type: "checkbox",
              value: "уникальный дизайн",
              checked: false,
            },
            {
              label: "разработка брендбука",
              name: "разработка брендбука",
              type: "checkbox",
              value: "разработка брендбука",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот (Chatra или другой)",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка на любой удобной CRM",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
            {
              label: "интеграция с CRM (bitrix24)",
              name: "интеграция с CRM",
              type: "checkbox",
              value: "интеграция с CRM",
              checked: false,
            },
            {
              label: "подключение мессенджеров к CRM",
              name: "подключение мессенджеров к CRM",
              type: "checkbox",
              value: "подключение мессенджеров к CRM",
              checked: false,
            },
            {
              label: "обучение работе с сайтом",
              name: "обучение работе с сайтом",
              type: "checkbox",
              value: "обучение работе с сайтом",
              checked: false,
            },
          ],
          personal: [
            {
              label: "уникальный дизайн",
              name: "уникальный дизайн",
              type: "checkbox",
              value: "уникальный дизайн",
              checked: false,
            },
            {
              label: "разработка брендбука",
              name: "разработка брендбука",
              type: "checkbox",
              value: "разработка брендбука",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот (Chatra или другой)",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label:
                "админка на PHP framework с учётом необходимых потребностей",
              name: "админка на PHP framework",
              type: "checkbox",
              value: "админка на PHP framework",
              checked: false,
            },
            {
              label: "интеграция с CRM (bitrix24)",
              name: "интеграция с CRM",
              type: "checkbox",
              value: "интеграция с CRM",
              checked: false,
            },
            {
              label: "подключение мессенджеров к CRM",
              name: "подключение мессенджеров к CRM",
              type: "checkbox",
              value: "подключение мессенджеров к CRM",
              checked: false,
            },
            {
              label: "обучение работе с сайтом",
              name: "обучение работе с сайтом",
              type: "checkbox",
              value: "обучение работе с сайтом",
              checked: false,
            },
            {
              label: "индивидуальные консультации по работе с сайтом",
              name: "индивидуальные консультации",
              type: "checkbox",
              value: "индивидуальные консультации",
              checked: false,
            },
          ],
        },
      },
    },
    promo: {
      input: {
        label: "Сайт-визитка",
        name: "тип сайта",
        type: "radio",
        value: "визитка",
        checked: false,
      },
      packages: {
        question: "Функционал",
        nextQuestion: "engines",
        types: {
          standard: [
            {
              label: "главная",
              name: "главная",
              type: "checkbox",
              value: "главная",
              checked: false,
            },
            {
              label: "контакты",
              name: "контакты",
              type: "checkbox",
              value: "контакты",
              checked: false,
            },
            {
              label: "о компании",
              name: "о компании",
              type: "checkbox",
              value: "о компании",
              checked: false,
            },
            {
              label: "портфолио",
              name: "портфолио",
              type: "checkbox",
              value: "портфолио",
              checked: false,
            },
            {
              label: "элемент портфолио",
              name: "элемент портфолио",
              type: "checkbox",
              value: "элемент портфолио",
              checked: false,
            },
            {
              label: "новости",
              name: "новости",
              type: "checkbox",
              value: "новости",
              checked: false,
            },
            {
              label: "статья",
              name: "статья",
              type: "checkbox",
              value: "статья",
              checked: false,
            },
          ],
          expanded: [
            {
              label: "главная",
              name: "главная",
              type: "checkbox",
              value: "главная",
              checked: false,
            },
            {
              label: "контакты",
              name: "контакты",
              type: "checkbox",
              value: "контакты",
              checked: false,
            },
            {
              label: "о компании",
              name: "о компании",
              type: "checkbox",
              value: "о компании",
              checked: false,
            },
            {
              label: "портфолио",
              name: "портфолио",
              type: "checkbox",
              value: "портфолио",
              checked: false,
            },
            {
              label: "элемент портфолио",
              name: "элемент портфолио",
              type: "checkbox",
              value: "элемент портфолио",
              checked: false,
            },
            {
              label: "новости",
              name: "новости",
              type: "checkbox",
              value: "новости",
              checked: false,
            },
            {
              label: "статья",
              name: "статья",
              type: "checkbox",
              value: "статья",
              checked: false,
            },
            {
              label: "индивидуальные страницы согласно вашей специфике",
              name: "индивидуальные страницы согласно вашей специфике",
              type: "checkbox",
              value: "индивидуальные страницы согласно вашей специфике",
              checked: false,
            },
          ],
          personal: [
            {
              label: "то же, что и расширенный",
              name: "то же, что и расширенный",
              type: "checkbox",
              value: "то же, что и расширенный",
              checked: false,
            },
            {
              label: "интеграция с CRM",
              name: "интеграция с CRM",
              type: "checkbox",
              value: "интеграция с CRM",
              checked: false,
            },
            {
              label: "настройки чат-бота",
              name: "настройки чат-бота",
              type: "checkbox",
              value: "настройки чат-бота",
              checked: false,
            },
            {
              label: "мультиязычность",
              name: "мультиязычность",
              type: "checkbox",
              value: "мультиязычность",
              checked: false,
            },
            {
              label: "перевод контента",
              name: "перевод контента",
              type: "checkbox",
              value: "перевод контента",
              checked: false,
            },
            {
              label: "индивидуальные консультации и обучение по наполнению",
              name: "индивидуальные консультации и обучение по наполнению",
              type: "checkbox",
              value: "индивидуальные консультации и обучение по наполнению",
              checked: false,
            },
            {
              label: "наполнение",
              name: "наполнение",
              type: "checkbox",
              value: "наполнение",
              checked: false,
            },
            {
              label: "создание индивидуальных решений",
              name: "создание индивидуальных решений",
              type: "checkbox",
              value: "создание индивидуальных решений",
              checked: false,
            },
          ],
        },
      },
      engines: {
        question: "CMS",
        nextQuestion: "design",
        types: [
          {
            label: "Framework",
            name: "движок",
            type: "radio",
            value: "framework",
            checked: false,
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
          },
          {
            label: "October CMS",
            name: "движок",
            type: "radio",
            value: "October CMS",
            checked: false,
          },
        ],
      },
    },
    catalog: {
      input: {
        label: "Каталог",
        name: "тип сайта",
        type: "radio",
        value: "каталог",
        checked: false,
      },
      packages: {
        question: "Функционал",
        nextQuestion: "engines",
        types: {
          standard: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
          expanded: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
          personal: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
        },
      },
      engines: {
        question: "CMS",
        nextQuestion: "design",
        types: [
          {
            label: "Framework",
            name: "движок",
            type: "radio",
            value: "framework",
            checked: false,
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
          },
        ],
      },
    },
    store: {
      input: {
        label: "Интернет-магазин",
        name: "тип сайта",
        type: "radio",
        value: "магазин",
        checked: false,
      },
      packages: {
        question: "Функционал",
        nextQuestion: "engines",
        types: {
          standard: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
          expanded: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
          personal: [
            {
              label: "шаблонный дизайн",
              name: "шаблонный дизайн",
              type: "checkbox",
              value: "шаблонный дизайн",
              checked: false,
            },
            {
              label: "разработка логотипа",
              name: "разработка логотипа",
              type: "checkbox",
              value: "разработка логотипа",
              checked: false,
            },
            {
              label: "форма обратной связи",
              name: "форма обратной связи",
              type: "checkbox",
              value: "форма обратной связи",
              checked: false,
            },
            {
              label: "чат-бот",
              name: "чат-бот",
              type: "checkbox",
              value: "чат-бот",
              checked: false,
            },
            {
              label: "админка",
              name: "админка",
              type: "checkbox",
              value: "админка",
              checked: false,
            },
          ],
        },
      },
      engines: {
        nextQuestion: "design",
        question: "CMS",
        types: [
          {
            label: "Framework",
            name: "движок",
            type: "radio",
            value: "framework",
            checked: false,
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
          },
        ],
      },
    },
  },
  design: {
    question: "Дизайн",
    nextQuestion: "",
    types: [
      {
        label: "Индивидуальный дизайн",
        name: "дизайн",
        type: "radio",
        value: "индивидуальынй дизайн",
        checked: false,
      },
      {
        label: "Шаблон",
        name: "дизайн",
        type: "radio",
        value: "шаблон",
        checked: false,
      },
    ],
  },
};

class Quiz {
  constructor(selector, data) {
    this._quiz = document.querySelector(selector);
    this._question = this._quiz.querySelector("#quiz-question");
    this._answers = this._quiz.querySelector("#quiz-answers");
    this._controls = this._quiz.querySelector("#quiz-controls");
    this._nextBtn = this._controls.querySelector("#quiz-controls-next");
    this._prevBtn = this._controls.querySelector("#quiz-controls-prev");
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
