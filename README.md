<img src="./.github/content/title.png">

<h1 align="center">CFNX Webdev Setup</h1>
<h3 align="center">Free and Simple Webdevelopment Template using Vite</h3>
<br>

## Main Information

**This is a repository for simple web-development without SSR or anything else with servers. Just write your Code in the HTML, (S)CSS, SASS, JavaScript and TypeScript files and compile them with the commands at the bottom. It's an extremely simple coding environment, for very small projects, which doesn't need servers, backends, and so on. _Not recommended for enterprise applications!_**

## ✨ Special Features

### 💻 [GitHub Actions](https://github.com/features/actions)

This project uses GitHub Actions for automated workflows, including code formatting with Prettier, linting with ESLint, testing with Vitest, and deployment to Vercel. These workflows ensure our codebase remains clean, adheres to standards, passes all tests, and is continuously deployed.

### 🚀 Automatic deployment to [Vercel](https://vercel.com/)

The deployment process to Vercel is automated via GitHub Actions. After successful formatting, linting, and testing, the application is built and deployed to Vercel using a secure Vercel token. With every push request on a specific branche, your Vercel site keeps beeing updated!

---

**❕ To enable this type of workflow, you have to do the following steps:**

-   Install the Vercel CLI globally via a terminal:

```bash
npm install -g vercel
```

-   Run this command to connect your Vercel account:

```bash
vercel
```

-   To setup a new site on Vercel, run the `vercel` command again and setup your site.
-   Make sure Vercel detected the correct project settings:

```bash
- Build Command: vite build
- Development Command: vite --port $PORT
- Install Command: `yarn install`, `pnpm install` or `npm install`
- Output Directory: dist
```

-   Your Vercel project is now ready! A folder called `.vercel` should appear in the root of your repo with a `project.json` file in it.
-   To correctly connect GitHub to Vercel, create new repository secrets on your GitHub repo.
-   **Your GitHub Repository** > **Settings** > **Secrets and variables** > **Actions** > **New repository secret**
-   Create these four secrets:

<br>

-   **VERCEL_PROJECT_ID**: Your Vercel project ID, which you can find in the `project.json` file in the `.vercel/` directory
-   **VERCEL_SCOPE**: The `orgId` in the `project.json` file.
-   **VERCEL_TOKEN**: To get a Vercel token, create one on the official [Vercel website](https://vercel.com/account/tokens). _Please set an expiration date for the token!_
-   **VERCEL_URL**: The URL, your website runs with (==> 'https://`VERCEL_URL`.vercel.app') or paste a real domain you bought.

## Setup

**Setup the simple coding environment with this command, which installs all necessary dependencies for Vite:**

```bash
npm i
```

## Commands

**Start the dev-server**

```bash
npm run dev
```

==> _Starts the development server on_ `http://localhost:5137/`_._

**Build the application**

```bash
npm run build
```

==> _Builds the app in the_ `dist/` _directory._

**Optimizing dependencies**

```bash
npm run optimize
```

**Preview the build**

```bash
npm run preview
```

==> _Starts a preview server of the build on_ `http://localhost:4137/`_._

**Test the code (vitest)**

```bash
npm run test
```

**Create a coverage page of testing**

```bash
npm run coverage
```

**Lint the code (eslint)**

```bash
npm run lint
```

**Format the code (prettier)**

```bash
npm run format
```

## Template Comparison

### Recommended Template-Usecases

<img src="./.github/content/rtu.png">

### (Un)Supported Features

|                                |                             **Basic**                              |  [**Pro**](https://github.com/Californien/cfnx-webdev-setup-pro)   | [**Enterprise**](https://github.com/Californien/cfnx-webdev-setup-enterprise) | [**Ultra**](https://github.com/Californien/cfnx-webdev-setup-ultra) |
| :----------------------------- | :----------------------------------------------------------------: | :----------------------------------------------------------------: | :---------------------------------------------------------------------------: | :-----------------------------------------------------------------: |
| CLI Commands                   | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| SASS / SCSS Support            | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Code Formatting                | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Linting                        | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Testing                        | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| CI/CD Integr. (GitHub Actions) | <img src="./.github/content/tick.png" width="30px" height="30px">  | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| ENV-Variables Support          | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Routing                        | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Middleware Functionality       | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| SSR                            | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Database Support               | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/tick.png" width="30px" height="30px">  |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Enterprise-Grade Features      | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/close.png" width="30px" height="30px"> |       <img src="./.github/content/tick.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
| Multi- & Cross-Platform        | <img src="./.github/content/close.png" width="30px" height="30px"> | <img src="./.github/content/close.png" width="30px" height="30px"> |      <img src="./.github/content/close.png" width="30px" height="30px">       |  <img src="./.github/content/tick.png" width="30px" height="30px">  |
