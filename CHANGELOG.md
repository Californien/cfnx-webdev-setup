<img src="./.github/content/changelog.png">

# Changelog

All notable changes to the 'cfnx-webdev-setup' repository will be documented in
this file. You don't really understand 'Added Feature' on the newest version? Check the README.md file.

## [v2.1.6]

### Updates

-   `@types/eslint__js` updated: --> v9.14.0
-   `globals` updated: --> v16.2.0
-   `jsdom` updated: --> v26.1.0
-   `vite` updated: --> v6.3.5
-   `vitest` updated: --> v3.2.2

## [v2.1.5]

### Updates

-   `@eslint/js` updated: --> v9.13.0
-   `eslint` updated: --> v9.13.0
-   `globals` updated: --> v15.11.0
-   `jsdom` updated (set fix-version): --> v25.0.1
-   `postcss` added (v8.4.47)
-   `typescript` updated (set fix-version): --> v5.6.3
-   `typescript-eslint` updated: --> v8.10.0
-   `vite` updated: --> v5.4.9
-   `vitest` updated: --> v2.1.3

-   Changed test-files location
-   Small eslint-config rework
-   Better typescript-support

### Fixes

-   (Hopefully) fixed `autoprefixer` not working because of non-existence `postcss` dependency.

## [v2.1.4]

### Updates

-   `@eslint/js` updated: --> v9.11.1
-   `eslint` updated: --> v9.11.1
-   `vitest` updated: --> v2.1.2
-   enabled `private` in `package.json`

## [v2.1.3]

### Updates

-   `globals` updated: --> v15.10.0
-   `typescript-eslint` updated: --> v8.8.0
-   `vite` updated: --> v5.4.8

## [v2.1.2]

### Updates

-   `@eslint/js` updated: --> v9.10.0
-   `autoprefixer` updated: --> v10.4.20
-   `c8` updated: --> v10.1.2
-   `eslint` updated: --> v9.10.0
-   `globals` updated: --> v15.9.0
-   `prettier` updated: --> v3.3.3
-   `typescript-eslint` updated: --> v8.6.0
-   `vite` updated: --> v5.4.6
-   `vitest` updated: --> v2.1.1

## [v2.1.1]

### Updates

-   Replaced font files by one variable font ==> more data-efficient!

## [v2.1.0]

### Updates

-   `vite` updated: --> v5.2.13

### Bug Fixes

-   Fixed ESLint command (`npm run lint`): dependency version downgrade: v9.4.0 => v8.57.0

### Added Features

-   GitHub workflows & actions (Formatting, Linter, Testing, Deployment)
-   Deployment: Automatic deployment to vercel (needs github secrets in repo)

## [v2.0.0]

### Updates

-   `vite` updated: --> v5.2.12

### Added Features

-   Typescript support
-   Automatic code formatting (prettier)
-   Code linter (JS, TS ==> eslint)
-   `vitest` added
-   Autoprefixer added

## [v1.2.0]

### Updates

-   `vite` updated: --> v5.2.11
-   Fonts added
-   SCSS file structure updated

## [v1.1.0]

### Updates

-   `vite` updated: --> v5.0.12

## [v1.0.0]

### Main Information

-   `cfnx-webdev-setup` is finished! With Vite (v4.4.5) a basic webdev-setup is
    avaiable.
-   Unfortunately, this particular web development setup is entirely
    server-free, devoid of any server functionalities whatsoever, operating
    solely on your local PC. It's just a built-tool!
