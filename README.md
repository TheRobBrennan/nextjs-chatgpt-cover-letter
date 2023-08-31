# Welcome

This project explores incorporating a [Next.js](https://nextjs.org) web application with Open AI's [ChatGPT](https://openai.com/chatgpt) to write a cover letter.

Shoutout to [Oluwafemi Akinyemi](https://semaphoreci.com/author/oluwafemi-akinyemi) and [Dan Ackerson](https://semaphoreci.com/author/dan-ackerson) for their work on creating this [blog post](https://semaphoreci.com/blog/cover-letter-app-nextjs-chatgpt) from Semaphore.

## Initial setup and configuration

### Create a new Next.js app

```sh
# Create a new app in our home directory
% npx create-next-app@latest
create-next-app@13.4.19
Ok to proceed? (y)
✔ What is your project named? … nextjs-chatgpt-cover-letter
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/rob/repos/nextjs-chatgpt-cover-letter/nextjs-chatgpt-cover-letter.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next
- tailwindcss
- postcss
- autoprefixer
- eslint
- eslint-config-next


added 323 packages, and audited 324 packages in 8s

117 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created nextjs-chatgpt-cover-letter at /Users/rob/repos/nextjs-chatgpt-cover-letter/nextjs-chatgpt-cover-letter

```

### Install dependencies

Once you have created your Next.js app, navigate to the appropriate directory and verify you can start your development server:

```sh
% cd nextjs-chatgpt-cover-letter && npm run dev

> nextjs-chatgpt-cover-letter@0.1.0 dev
> next dev

- ready started server on [::]:3000, url: http://localhost:3000
- event compiled client and server successfully in 113 ms (20 modules)
- wait compiling...
- event compiled client and server successfully in 72 ms (20 modules)

```

Let's add our dependencies.

```sh
# openai package is a library provided by OpenAI that allows you to interact with their language models and APIs - https://www.npmjs.com/package/openai
# openai-api package is a specific API client library provided by OpenAI - https://www.npmjs.com/package/openai-api
% npm install openai openai-api

# pdf-lib is a library that enables you to work with PDF files programmatically - https://www.npmjs.com/package/pdf-lib?activeTab=readme
% npm install pdf-lib

# sweetalert2 is a JavaScript library that provides beautiful and customizable popup dialogs, alerts, and modals - https://www.npmjs.com/package/sweetalert2
% npm install sweetalert2

# file-saver is a library that helps in saving files from the web to the user’s device - https://www.npmjs.com/package/file-saver
% npm install file-saver

```

All that's left is to verify that your development server runs as expected with `npm run dev` 🤓

### Build the Cover Letter Writing App

First, let's update [./nextjs-chatgpt-cover-letter/app/page.js](./nextjs-chatgpt-cover-letter/app/page.js) with a basic form for our cover letter generator.

Sign in to your Open AI account and generate a new API key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys). Be sure to copy this value to use it in the next step.

Create `nextjs-chatgpt-cover-letter/app/.env.local` by copying `nextjs-chatgpt-cover-letter/app/.env.local.sample` to `nextjs-chatgpt-cover-letter/app/.env.local` - replacing the environment variables as desired.
