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
        { label: "Обзоры", items: [
            { label: "Законодательство", link: "/legislation/" },
            { label: "Правовая экспертиза", link: "/legal-expertise/" },
            { label: "Протесты прокуратуры", link: "/protests-procuracy/" },
        ]},
        { label: "Руководства", items: [
            { label: "Агент регистра", link: "/agent-registry/" },
            { label: "Ссылки", link: "/links/" },
        ]},
        { label: "Методические рекомендации", items: [
            { label: "Совещания", link: "/meetings/" },
            { label: "Конференции", link: "/conferention/" },
            { label: "Правовая экспертиза", link: "/mrexpertise/" },
            { label: "Создание МНПА", link: "/mrcreatemnpa/" },
        ]}
      ],
    }),
  ],
});
