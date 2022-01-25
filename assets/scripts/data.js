export const data = {
  initQuestionLabel: "Тип сайта",
  initQuestion: "sites",
  packages: {
    question: "Тип пакета услуг",
    nextQuestion: "engines",
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
          label: "Индивидуальный",
          name: "пакет услуг",
          type: "radio",
          value: "индивидуальный",
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
        nextQuestion: "engines",
        types: {
          standard: {
            hours: {
              frontend: 0,
              design: 0,
              backend: 0,
            },
            descrip: [
              "шаблонный дизайн",
              "разработка логотипа",
              "форма обратной связи",
              "чат-бот (Chatra или другой)",
              "админка на любой удобной CRM",
            ],
          },
          expanded: {
            hours: {
              frontend: 8,
              design: 8,
              backend: 8,
            },
            descrip: [
              "уникальный дизайн",
              "разработка брендбука",
              "форма обратной связи",
              "чат-бот (Chatra или другой)",
              "админка на любой удобной CRM",
              "интеграция с CRM (bitrix24)",
              "подключение мессенджеров к CRM",
              "обучение работе с сайтом",
            ],
          },
          personal: {
            hours: {
              frontend: 8,
              design: 8,
              backend: 18,
            },
            descrip: [
              "уникальный дизайн",
              "разработка брендбука",
              "форма обратной связи",
              "чат-бот (Chatra или другой)",
              "админка на PHP framework с учётом необходимых потребностей",
              "интеграция с CRM (bitrix24)",
              "подключение мессенджеров к CRM",
              "обучение работе с сайтом",
              "индивидуальные консультации по работе с сайтом",
            ],
          },
        },
      },
      engines: {
        question: "CMS",
        nextQuestion: "",
        types: [
          {
            label: "Framework",
            name: "движок",
            type: "radio",
            value: "Framework",
            checked: false,
            hours: 50,
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
            hours: 8,
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
            hours: 8,
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
            hours: 8,
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
            hours: 8,
          },
          {
            label: "October CMS",
            name: "движок",
            type: "radio",
            value: "October CMS",
            checked: false,
            hours: 8,
          },
        ],
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
          standard: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
            ],
          },
          expanded: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "индивидуальные страницы согласно вашей специфике",
            ],
          },
          personal: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "индивидуальные страницы согласно вашей специфике",
            ],
            inputs: [
              {
                label: "интеграция с CRM",
                name: "интеграция с CRM",
                type: "checkbox",
                value: "интеграция с CRM",
                checked: false,
                hours: 20,
              },
              {
                label: "настройки чат-бота",
                name: "настройки чат-бота",
                type: "checkbox",
                value: "настройки чат-бота",
                checked: false,
                hours: 1,
              },
              {
                label: "мультиязычность",
                name: "мультиязычность",
                type: "checkbox",
                value: "мультиязычность",
                checked: false,
                hours: 10,
              },
              {
                label: "перевод контента",
                name: "перевод контента",
                type: "checkbox",
                value: "перевод контента",
                checked: false,
                hours: 5,
              },
              {
                label: "индивидуальные консультации и обучение по наполнению",
                name: "индивидуальные консультации и обучение по наполнению",
                type: "checkbox",
                value: "индивидуальные консультации и обучение по наполнению",
                checked: false,
                hours: 10,
              },
              {
                label: "наполнение",
                name: "наполнение",
                type: "checkbox",
                value: "наполнение",
                checked: false,
                hours: 2,
              },
              {
                label: "создание индивидуальных решений",
                name: "создание индивидуальных решений",
                type: "checkbox",
                value: "создание индивидуальных решений",
                checked: false,
                hours: 20,
              },
            ],
          },
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
            hours: {
              standard: 250,
              expanded: 300,
              personal: 500,
            },
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
          },
          {
            label: "October CMS",
            name: "движок",
            type: "radio",
            value: "October CMS",
            checked: false,
            hours: {
              standard: 20,
              expanded: 30,
              personal: 30,
            },
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
          standard: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "каталог товаров",
              "категория товаров",
              "карточка товара",
              "поиск",
            ],
          },
          expanded: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "каталог товаров",
              "категория товаров",
              "карточка товара",
              "поиск",
              "индивидуальные страницы согласно вашей специфике",
            ],
          },
          personal: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "индивидуальные страницы согласно вашей специфике",
            ],
            inputs: [
              {
                label: "интеграция с CRM",
                name: "интеграция с CRM",
                type: "checkbox",
                value: "интеграция с CRM",
                checked: false,
                hours: 20,
              },
              {
                label: "настройки чат-бота",
                name: "настройки чат-бота",
                type: "checkbox",
                value: "настройки чат-бота",
                checked: false,
                hours: 1,
              },
              {
                label: "мультиязычность",
                name: "мультиязычность",
                type: "checkbox",
                value: "мультиязычность",
                checked: false,
                hours: 10,
              },
              {
                label: "перевод контента",
                name: "перевод контента",
                type: "checkbox",
                value: "перевод контента",
                checked: false,
                hours: 5,
              },
              {
                label: "индивидуальные консультации и обучение по наполнению",
                name: "индивидуальные консультации и обучение по наполнению",
                type: "checkbox",
                value: "индивидуальные консультации и обучение по наполнению",
                checked: false,
                hours: 10,
              },
              {
                label: "наполнение",
                name: "наполнение",
                type: "checkbox",
                value: "наполнение",
                checked: false,
                hours: 2,
              },
              {
                label: "создание индивидуальных решений",
                name: "создание индивидуальных решений",
                type: "checkbox",
                value: "создание индивидуальных решений",
                checked: false,
                hours: 20,
              },
              {
                label: "парсинг товаров",
                name: "парсинг товаров",
                type: "checkbox",
                value: "парсинг товаров",
                checked: false,
                hours: 16,
              },
              {
                label: "ручное заполнение",
                name: "ручное заполнение",
                type: "checkbox",
                value: "ручное заполнение",
                checked: false,
                hours: 80,
              },
              {
                label: "создание модификаций товаров",
                name: "создание модификаций товаров",
                type: "checkbox",
                value: "создание модификаций товаров",
                checked: false,
                hours: 80,
              },
              {
                label: "страница сравнения",
                name: "страница сравнения",
                type: "checkbox",
                value: "страница сравнения",
                checked: false,
                hours: 4,
              },
              {
                label:
                  "вёрстка письма для заказчика с использованием фирменного стиля",
                name: "вёрстка письма для заказчика с использованием фирменного стиля",
                type: "checkbox",
                value:
                  "вёрстка письма для заказчика с использованием фирменного стиля",
                checked: false,
                hours: 2,
              },
            ],
          },
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
            hours: {
              standard: 250,
              expanded: 300,
              personal: 500,
            },
          },
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
            hours: {
              standard: 35,
              expanded: 40,
              personal: 40,
            },
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
            hours: {
              standard: 35,
              expanded: 40,
              personal: 40,
            },
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
            hours: {
              standard: 37,
              expanded: 40,
              personal: 40,
            },
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
            hours: {
              standard: 38,
              expanded: 40,
              personal: 40,
            },
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
            hours: {
              standard: 39,
              expanded: 40,
              personal: 40,
            },
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
          standard: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "каталог товаров",
              "категория товаров",
              "карточка товара",
              "поиск",
            ],
          },
          expanded: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "каталог товаров",
              "категория товаров",
              "карточка товара",
              "поиск",
              "индивидуальные страницы согласно вашей специфике",
            ],
          },
          personal: {
            descrip: [
              "главная",
              "контакты",
              "о компании",
              "портфолио",
              "элемент портфолио",
              "новости",
              "статья",
              "индивидуальные страницы согласно вашей специфике",
            ],
            inputs: [
              {
                label: "личный кабинет",
                name: "личный кабинет",
                type: "checkbox",
                value: "личный кабинет",
                checked: false,
                hours: 20,
              },
              {
                label: "история заказов",
                name: "история заказов",
                type: "checkbox",
                value: "история заказов",
                checked: false,
                hours: 2,
              },
              {
                label: "программа лояльности",
                name: "программа лояльности",
                type: "checkbox",
                value: "программа лояльности",
                checked: false,
                hours: 2,
              },
              {
                label: "промокоды",
                name: "промокоды",
                type: "checkbox",
                value: "промокоды",
                checked: false,
                hours: 2,
              },
              {
                label: "интеграция с CRM",
                name: "интеграция с CRM",
                type: "checkbox",
                value: "интеграция с CRM",
                checked: false,
                hours: 20,
              },
              {
                label: "настройки чат-бота",
                name: "настройки чат-бота",
                type: "checkbox",
                value: "настройки чат-бота",
                checked: false,
                hours: 1,
              },
              {
                label: "мультиязычность",
                name: "мультиязычность",
                type: "checkbox",
                value: "мультиязычность",
                checked: false,
                hours: 10,
              },
              {
                label: "перевод контента",
                name: "перевод контента",
                type: "checkbox",
                value: "перевод контента",
                checked: false,
                hours: 5,
              },
              {
                label: "индивидуальные консультации и обучение по наполнению",
                name: "индивидуальные консультации и обучение по наполнению",
                type: "checkbox",
                value: "индивидуальные консультации и обучение по наполнению",
                checked: false,
                hours: 10,
              },
              {
                label: "наполнение",
                name: "наполнение",
                type: "checkbox",
                value: "наполнение",
                checked: false,
                hours: 2,
              },
              {
                label: "создание индивидуальных решений",
                name: "создание индивидуальных решений",
                type: "checkbox",
                value: "создание индивидуальных решений",
                checked: false,
                hours: 20,
              },
              {
                label: "парсинг товаров",
                name: "парсинг товаров",
                type: "checkbox",
                value: "парсинг товаров",
                checked: false,
                hours: 16,
              },
              {
                label: "ручное заполнение",
                name: "ручное заполнение",
                type: "checkbox",
                value: "ручное заполнение",
                checked: false,
                hours: 80,
              },
              {
                label: "создание модификаций товаров",
                name: "создание модификаций товаров",
                type: "checkbox",
                value: "создание модификаций товаров",
                checked: false,
                hours: 80,
              },
              {
                label: "страница сравнения",
                name: "страница сравнения",
                type: "checkbox",
                value: "страница сравнения",
                checked: false,
                hours: 4,
              },
              {
                label:
                  "вёрстка письма для заказчика с использованием фирменного стиля",
                name: "вёрстка письма для заказчика с использованием фирменного стиля",
                type: "checkbox",
                value:
                  "вёрстка письма для заказчика с использованием фирменного стиля",
                checked: false,
                hours: 2,
              },
            ],
          },
        },
      },
      engines: {
        question: "CMS",
        nextQuestion: "design",
        types: [
          {
            label: "Modx Revolution",
            name: "движок",
            type: "radio",
            value: "Modx Revolution",
            checked: false,
            hours: {
              standard: 80,
              expanded: 120,
              personal: 120,
            },
          },
          {
            label: "Evolution CMS",
            name: "движок",
            type: "radio",
            value: "Evolution CMS",
            checked: false,
            hours: {
              standard: 80,
              expanded: 120,
              personal: 120,
            },
          },
          {
            label: "1C Bitrix",
            name: "движок",
            type: "radio",
            value: "1C Bitrix",
            checked: false,
            hours: {
              standard: 80,
              expanded: 120,
              personal: 120,
            },
          },
          {
            label: "Wordpress",
            name: "движок",
            type: "radio",
            value: "Wordpress",
            checked: false,
            hours: {
              standard: 80,
              expanded: 120,
              personal: 120,
            },
          },
          {
            label: "Tilda",
            name: "движок",
            type: "radio",
            value: "Tilda",
            checked: false,
            hours: {
              standard: 80,
              expanded: 120,
              personal: 120,
            },
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
        hours: {
          promo: {
            design: 40,
            frontend: 40,
          },
          catalog: {
            design: 50,
            frontend: 70,
          },
          store: {
            design: 50,
            frontend: 70,
          },
        },
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
