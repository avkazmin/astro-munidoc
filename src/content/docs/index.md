---
title: Getting Started
description: Set up and run your first task with Jules
editUrl: false
template: splash
hero:
  title: 'Jules Docs'
  tagline: Set up and run your first task with Jules.
  # hero.image секция должна быть либо полностью закомментирована/удалена,
  # либо содержать валидную конфигурацию (например, file: '/path/to/image.svg')
  # Оставляем ее закомментированной по умолчанию для "безизображенческого" варианта:
  # image:
  #   file: /placeholder-hero.svg
  #   alt: 'Jules Docs Hero Image'
  actions:
    - text: Get Started
      link: /docs/environment/
      icon: right-arrow
      variant: primary
---
import { Steps } from '@astrojs/starlight/components';

Jules is an experimental coding agent that helps you fix bugs, add documentation, and build new features. It integrates with GitHub, understands your codebase, and works **asynchronously** — so you can move on while it handles the task.

This guide will walk you through setting up Jules and running your first task.

## Login
<Steps>
1.  Visit [jules.google.com](https://jules.google.com)
2.  Sign in with your Google account.
3.  Accept the privacy notice (one‑time).
</Steps>

## Connect GitHub
<Steps>
1.  Click **Connect to GitHub account.**
2.  Complete the login flow.
3.  Choose *all* or specific repos that you want to connect to Jules.
4.  You will be redirected back to Jules. If not, try refreshing the page.
</Steps>

## Starting your first task
<Steps>
1.  Pick a repository from the repo selector.
2.  Choose the branch you want Jules to work on.
3.  Write a clear, specific prompt. Example: `Add a test for "parseQueryString" function in utils.js`
4.  (Optional) Add environment setup scripts.
5.  Click **Give me a plan**
</Steps>

## Enabling notifications
<Steps>
1.  When prompted, enable browser notifications.
2.  Go to **Settings —> notifications** at any time.
</Steps>

## What’s next?
-   [Running a task with Jules](./running-tasks/)
-   [Environment setup](./environment/)
-   [Reviewing plans & feedback](./review-plan/)

[Jules Awesome Prompts repo](https://github.com/google-labs-code/jules-awesome-list).
