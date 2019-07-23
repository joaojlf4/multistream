# Electron React Bloatfree

A boilerplate repository based on electron-react-boilerplate without all the bloat you may don't want like Redux, React Router and jest.

At least Wikipedia says

> **boilerplate** code or just **boilerplate** are sections of code that have to be included in many places **with little or no alteration**

but the original repository doesn't really offer that.

This repository gives you the freedom to create a desktop app with React,

- without cleaning up the package.json first,
- without deleting a bunch of folders and files you won't use anyway,
- without being restricted to a router based setup even though you eventually only need one view,
- and without opinionated linting and editor configs telling you how to format your code,

while still providing the basic toolset most people use for maintaining an app, like eslint, flow and yarn.

If this setup still doesn't satisfy your vanilla needs,

- you can easily remove all the flow stuff,
- switching to another package manager shouldn't be **that** time consuming either (delete .yarnclean, yarn.lock and replace all references to yarn in the package.json file)
- and changing the linting setup is even recommended (change the "rules" in .eslintrc file as needed or delete them alltogether),

**but** I'm planning to make a lite version, where all of the things above are already done for you. The only reason an eslint config is included here is because it's meant to be used to develop this boilerplate, not to be part of your project. Just like the CHANGELOG file for example, this is meta stuff you can replace or delete safely after cloning.

## Install

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/nnmrts/electron-react-bloatfree.git your-project-name
```

And then install the dependencies with yarn.

```bash
cd your-project-name
yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Why I did this

The goal of this repository is just to save you some time. I'm not saying the original repository isn't great, because it is. But the probability that you want to use all of the stuff included and not something else is just too small to include it in a boilerplate in my opinion. So, yeah, this repository is probably "opinionated" too.

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
