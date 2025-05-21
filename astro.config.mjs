
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
      // Замените 'YourUsername' и 'YourRepositoryName' на ваши значения
    site: 'https://avkazmin.github.io', // Основной домен GitHub Pages
    base: '/astro-munidoc/',           // Имя вашего репозитория с слешами
    integrations: [
        starlight({
            title: 'Munidoc',
            social: [],
            sidebar: [
                {
                    label: 'Docs',
                    items: [
                        { label: 'Getting Started', link: '/docs/' },
                        { label: 'Environment setup', link: '/docs/environment/' },
                        { label: 'Running tasks', link: '/docs/running-tasks/' },
                        { label: 'Planning', link: '/docs/review-plan/' },
                        { label: 'Reviewing code', link: '/docs/code/' },
                        { label: 'Managing tasks and repos', link: '/docs/tasks-repos/' },
                        { label: 'Using the repo view', link: '/docs/repo/' },
                        { label: 'Errors and failures', link: '/docs/errors/' },
                        { label: 'Usage and limits', link: '/docs/usage-limits/' },
                        { label: 'Feedback and support', link: '/docs/feedback/' },
                    ],
                },
                {
                    label: 'More Resources',
                    items: [
                        { label: 'FAQ', link: '/docs/faq/' },
                        { label: 'Changelog', link: '/docs/changelog/' },
                        { label: 'Contact', link: '/docs/contact/' },
                    ],
                },
            ],
        }),
    ],
});
