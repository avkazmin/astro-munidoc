import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  // Замените 'YourUsername' и 'YourRepositoryName' на ваши значения
  site: "https://avkazmin.github.io", // Основной домен GitHub Pages
  base: "/astro-munidoc/", // Имя вашего репозитория с слешами
  integrations: [
    starlight({
      title: "Munidoc",
      social: [],
      sidebar: [
        {
          label: "Обзоры",
          items: [
            { label: "Законодательство", link: "/legislation/" },
            { label: "Правовая экспертиза", link: "/legal-expertise/" },
            { label: "Протесты прокуратуры", link: "/protests-procuracy/" },
          ],
        },
        {
          label: "Проекты МНПА",
          items: [
            { label: "Муниципальные услги", link: "/municipal-services/" },
            { label: "Муниципальный контроль", link: "/municipal-control/" },
            { label: "Бюджетный процесс", link: "/budget-process/" },
          ],
        },
        {
          label: "Руководства",
          items: [
            { label: "Агент регистра", link: "/agent-registry/" },
            { label: "Портал НПА РФ", link: "/npa-portal/" },
            { label: "Аналитика", link: "/analytics/" },
          ],
        },
        {
          label: "Методические рекомендации",
          items: [
            { label: "Совещания", link: "/meetings/" },
            { label: "Реестр полномочий ОМСУ", link: "/omsu-powers/" },
            { label: "История изменений", link: "/changelog/" },
          ],
        },
      ],
    }),
  ],
});
