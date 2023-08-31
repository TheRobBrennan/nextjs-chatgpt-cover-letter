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
