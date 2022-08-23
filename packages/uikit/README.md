# 🥞 Spurdex UIkit

[![Version](https://img.shields.io/npm/v/@spurdex/uikit)](https://www.npmjs.com/package/@spurdex/uikit) [![Size](https://img.shields.io/bundlephobia/min/@spurdex/uikit)](https://www.npmjs.com/package/@spurdex/uikit)

Spurdex UIkit is a set of React components and hooks used to build pages on Spurdex's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @spurdex/uikit`

***Note**: In case you want to use the older version of the Spurdex UIkit, you should install @spurdex-libs/uikit, instead, but we recommend using the latest version of the UIkit.*


## Setup

### Theme

Before using Spurdex UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@spurdex/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@spurdex/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://spurdex.github.io/pancake-uikit/)
