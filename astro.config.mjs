import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import logoSrc from "./src/assets/logo.svg";

export default defineConfig({
  site: "https://munidoc.ru",
  base: "/",
  output: "static", // 👈 вот это добавь
  integrations: [
    starlight({
      title: "Munidoc",
      logo: {
        src: logoSrc,
        alt: "Логотип Munidoc",
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/avkazmin/astro-munidoc' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/normowriter' }
      ],
      sidebar: [
         {
          label: "О проекте",
          // collapsed: true, // Можно свернуть, чтобы не занимало место
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
            // { label: "Реестр полномочий ОМСУ", link: "/omsu-powers/" },
            // { label: "История изменений", link: "/changelog/" },
        ]},
        {label: "Нейросети для юриста", items: [
            // { label: "Данные", link: "/datasciense/" },
            // { label: "Python", link: "/python/" },
            { label: "Коллекция промптов для юристов: Руководство по ChatGPT", link: "/prompts/" },
          ],
        },
      ],
    }),
  ],
});
