const data = {
  dev: {
    initQuestion: "Тип сайта",
    branches: {
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
              checked: true,
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
            checked: true,
          },
          packages: {
            question: "Функционал",
            nextQuestion: "",
            types: {
              standard: [
                {
                  label: "шаблонный дизайн",
                  name: "шаблонный дизайн",
                  type: "checkbox",
                  value: "шаблонный дизайн",
                  checked: true,
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
                  checked: true,
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
                  checked: true,
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
            question: "",
            types: [
              {
                label: "Framework",
                name: "движок",
                type: "radio",
                value: "framework",
                checked: true,
              },
              {
                label: "Modx Revolution",
                name: "движок",
                type: "radio",
                value: "Modx Revolution",
                checked: true,
              },
              {
                label: "Evolution CMS",
                name: "движок",
                type: "radio",
                value: "Evolution CMS",
                checked: true,
              },
              {
                label: "1C Bitrix",
                name: "движок",
                type: "radio",
                value: "1C Bitrix",
                checked: true,
              },
              {
                label: "Wordpress",
                name: "движок",
                type: "radio",
                value: "Wordpress",
                checked: true,
              },
              {
                label: "Tilda",
                name: "движок",
                type: "radio",
                value: "Tilda",
                checked: true,
              },
              {
                label: "October CMS",
                name: "движок",
                type: "radio",
                value: "October CMS",
                checked: true,
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
            nextQuestion: "engine",
            types: {
              standard: [
                {
                  label: "шаблонный дизайн",
                  name: "шаблонный дизайн",
                  type: "checkbox",
                  value: "шаблонный дизайн",
                  checked: true,
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
            types: [
              {
                label: "Framework",
                name: "движок",
                type: "radio",
                value: "framework",
                checked: true,
              },
              {
                label: "Modx Revolution",
                name: "движок",
                type: "radio",
                value: "Modx Revolution",
                checked: true,
              },
              {
                label: "Evolution CMS",
                name: "движок",
                type: "radio",
                value: "Evolution CMS",
                checked: true,
              },
              {
                label: "1C Bitrix",
                name: "движок",
                type: "radio",
                value: "1C Bitrix",
                checked: true,
              },
              {
                label: "Wordpress",
                name: "движок",
                type: "radio",
                value: "Wordpress",
                checked: true,
              },
              {
                label: "Tilda",
                name: "движок",
                type: "radio",
                value: "Tilda",
                checked: true,
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
            nextQuestion: "engine",
            types: {
              standard: [
                {
                  label: "шаблонный дизайн",
                  name: "шаблонный дизайн",
                  type: "checkbox",
                  value: "шаблонный дизайн",
                  checked: true,
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
            types: [
              {
                label: "Framework",
                name: "движок",
                type: "radio",
                value: "framework",
                checked: true,
              },
              {
                label: "Modx Revolution",
                name: "движок",
                type: "radio",
                value: "Modx Revolution",
                checked: true,
              },
              {
                label: "1C Bitrix",
                name: "движок",
                type: "radio",
                value: "1C Bitrix",
                checked: true,
              },
            ],
          },
        },
      },
    },
  },
};

class Quiz {
  constructor(selector, data) {
    this.quiz = document.querySelector(selector);
    this.question = this.quiz.querySelector("#quiz-question");
    this.answers = this.quiz.querySelector("#quiz-answers");
    this.nextBtn = this.quiz.querySelector("#quiz-next");
    this.prevBtn = this.quiz.querySelector("#quiz-prev");
    this.data = data;
    this.devBranch = "";
    this.packageBranch = "";
    this.nextQuestion = "";
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
                                data-quiz-next-question="${nextQuestion}"
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
    this.answers.innerHTML = "";
  }

  _createPrevQuestion() {}

  _createNextQuestion() {
    const checkedInput = this.answers.querySelector("input:checked");

    if (!this.devBranch) {
      this.devBranch = checkedInput.dataset.quizDevBranch;
    }

    if (!this.packageBranch && checkedInput.dataset.quizPackageBranch) {
      this.packageBranch = checkedInput.dataset.quizPackageBranch;
    }

    this.nextQuestion = checkedInput.dataset.quizNextQuestion;

    this._clearAnswers();

    switch (this.nextQuestion) {
      case "packages":
        this.question.innerText = this.data.dev.branches.packages.question;

        for (const [key, value] of Object.entries(
          this.data.dev.branches.packages.types
        )) {
          this.answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.input.label,
              type: value.input.type,
              name: value.input.name,
              value: value.input.value,
              checked: value.input.checked,
              devBranch: this.devBranch,
              packageBranch: key,
              nextQuestion: this.data.dev.branches.packages.nextQuestion,
            })
          );
        }
        break;

      case "services":
        this.question.innerText =
          this.data.dev.branches.sites[this.devBranch].packages.question;

        for (const [key, value] of Object.entries(
          this.data.dev.branches.sites[this.devBranch].packages.types[
            this.packageBranch
          ]
        )) {
          this.answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.label,
              type: value.type,
              name: value.name,
              value: value.value,
              checked: value.checked,
              devBranch: this.devBranch,
              packageBranch: this.packageBranch,
              nextQuestion:
                this.data.dev.branches.sites[this.devBranch].packages
                  .nextQuestion,
            })
          );
        }
        break;

      case "engine":
        this.question.innerText =
          this.data.dev.branches.sites[this.devBranch].engines.question;

        for (const [key, value] of Object.entries(
          this.data.dev.branches.sites[this.devBranch].engines.types
        )) {
          this.answers.insertAdjacentHTML(
            "beforeend",
            this._createInput({
              label: value.label,
              type: value.type,
              name: value.name,
              value: value.value,
              checked: value.checked,
              devBranch: this.devBranch,
              packageBranch: this.packageBranch,
              nextQuestion:
                this.data.dev.branches.sites[this.devBranch].engines,
            })
          );
        }
        break;

      default:
        this.question.innerText = "Результат";
        console.log("result");
        break;
    }
  }

  init() {
    this.question.innerText = data.dev.initQuestion;

    this.nextBtn.addEventListener("click", () => this._createNextQuestion());
    this.prevBtn.addEventListener("click", () => this._createPrevQuestion());

    for (const [key, value] of Object.entries(this.data.dev.branches.sites)) {
      this.answers.insertAdjacentHTML(
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
  }
}

const quiz = new Quiz("#quiz", data);
quiz.init();
