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
          label: "Docs",
          items: [
            { label: "Getting Started", link: "/" },
            { label: "Environment setup", link: "/environment/" },
            { label: "Running tasks", link: "/running-tasks/" },
            { label: "Planning", link: "/review-plan/" },
            { label: "Reviewing code", link: "/code/" },
            { label: "Managing tasks and repos", link: "/tasks-repos/" },
            { label: "Using the repo view", link: "/repo/" },
            { label: "Errors and failures", link: "/errors/" },
            { label: "Usage and limits", link: "/usage-limits/" },
            { label: "Feedback and support", link: "/feedback/" },
          ],
        },
        {
          label: "More Resources",
          items: [
            { label: "FAQ", link: "/faq/" },
            { label: "Changelog", link: "/changelog/" },
            { label: "Contact", link: "/contact/" },
          ],
        },
      ],
    }),
  ],
});
