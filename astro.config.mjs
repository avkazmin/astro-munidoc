import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import logoSrc from "./src/assets/logo.svg";

export default defineConfig({
  site: "https://munidoc.ru",
  base: "/",
  output: "static", // 👈 Добавлено по вашему запросу
  integrations: [
    starlight({
      title: "Munidoc",
      logo: {
        src: logoSrc,
        alt: "Логотип Munidoc",
        replacesTitle: true,
      },
      // 🔌 Настройка встроенного Expressive Code
      expressiveCode: {
        // Указываем тему Dracula. Рекомендуется передать вторым аргументом светлую тему,
        // чтобы при переключении сайта в светлый режим код оставался читаемым.
        themes: ['dracula', 'github-light'], 
        // Если вы хотите, чтобы Dracula использовалась и для светлой, и для темной темы:
        // themes: ['dracula'],
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/avkazmin/astro-munidoc' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/normowriter' }
      ],
      sidebar: [
         {
          label: "О проекте",
          items: [
            { label: "Цели и задачи", link: "/about/" },
            { label: "Об авторе", link: "/author/" },
            { label: "Дисклеймер", link: "/disclaimer/" }, 
        ]},
        { label: "Практика", items: [
            { label: "Законодательство", link: "/legislation/" },
            { label: "Правовая экспертиза", link: "/legal-expertise/" },
            { label: "Протесты прокуратуры", link: "/protests-procuracy/" },
        ]},
        { label: "Инструменты", items: [
            { label: "Jupyter Notebook", link: "/jupyter/" },  
            { label: "Дашборд", link: "/datalens/" },
            { label: "Power Query", link: "/powerquery/" },
            { label: "Агент регистра", link: "/agent-registry/" },
            { label: "Ссылки", link: "/links/" },
        ]},
        { label: "Мероприятия и обучение", items: [
            { label: "Совещания", link: "/meetings/" },
            { label: "Конференции", link: "/conferention/" },
        ]},
        { label: "Нейросети для юриста", items: [
            { label: "Коллекция промптов для юристов: Руководство по ChatGPT", link: "/prompts/" },
          ],
        },
      ],
    }),
  ],
});