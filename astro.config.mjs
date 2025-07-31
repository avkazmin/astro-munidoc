import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import logoSrc from "./src/assets/logo.svg"; // Импортируем логотип

export default defineConfig({
  // Замените 'YourUsername' и 'YourRepositoryName' на ваши значения
  site: "https://avkazmin.github.io", // Основной домен GitHub Pages
  base: "/astro-munidoc/", // Имя вашего репозитория с слешами
  integrations: [
    starlight({
      title: "Munidoc",
      logo: {
        src: logoSrc, // Используем импортированный логотип
        alt: "Логотип Munidoc",
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/avkazmin/astro-munidoc' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/normowriter' }
      ],
      sidebar: [
        {
          label: "Обзоры",
          items: [
            { label: "Законодательство", link: "/legislation/" },
            { label: "Правовая экспертиза", link: "/legal-expertise/" },
            { label: "Протесты прокуратуры", link: "/protests-procuracy/" },
          ],
        },
        // {
        //   label: "Проекты",
        //   items: [
        //     { label: "Муниципальные услуги", link: "/municipal-services/" },
        //     { label: "Муниципальный контроль", link: "/municipal-control/" },
        //     { label: "Бюджетный процесс", link: "/budget-process/" },
        //   ],
        // },
        {
          label: "Руководства",
          items: [
            { label: "Агент регистра", link: "/agent-registry/" },
            { label: "Ссылки", link: "/links/" },
            // { label: "Портал НПА РФ", link: "/npa-portal/" },
            // { label: "Аналитика", link: "/analytics/" },
          ],
        },
        {
          label: "Методические рекомендации",
          items: [
            { label: "Совещания", link: "/meetings/" },
            { label: "Конференции", link: "/conferention/" },
            { label: "Правовая экспертиза", link: "/mrexpertise/" },
            // { label: "Реестр полномочий ОМСУ", link: "/omsu-powers/" },
            // { label: "История изменений", link: "/changelog/" },
          ],
        },
        // {
        //   label: "Нейросети для юриста",
        //   items: [
        //     { label: "Данные", link: "/datasciense/" },
        //     { label: "Python", link: "/python/" },
        //     { label: "Коллекция промптов", link: "/prompts/" },
        //   ],
        // },
      ],
    }),
  ],
});
