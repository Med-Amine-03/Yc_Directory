# YC Directory: startup pitch platform

A Next.js platform where founders publish startup pitches and visitors browse, search and read them.

> Built following [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)'s YC Directory tutorial.

## Features

- Sign in with GitHub (NextAuth)
- Create a startup pitch with a Markdown editor
- Search and browse pitches, view counts, author profiles
- Content stored and managed in Sanity CMS (embedded Sanity Studio at `/studio`)
- Error monitoring with Sentry

## Tech stack

Next.js · TypeScript · Tailwind CSS · Sanity · NextAuth · Sentry

## Run it

```bash
git clone https://github.com/Med-Amine-03/Yc_Directory.git
cd Yc_Directory
npm install
npm run dev   # http://localhost:3000
```

Set the Sanity, NextAuth (GitHub) and Sentry variables in `.env.local` first.
