# MACAROON

[![npm version](https://badge.fury.io/js/macaroon.css.svg)](https://badge.fury.io/js/macaroon.css)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/macaroon)](https://github.com/DesignByCode/macaroon/stargazers)
[![GitHub license](https://img.shields.io/github/license/DesignByCode/macaroon)](https://github.com/DesignByCode/macaroon)
[![GitHub issues](https://img.shields.io/github/issues/DesignByCode/macaroon)](https://github.com/DesignByCode/macaroon/issues)

[![NPM](https://nodei.co/npm/macaroon.css.png?compact=true)](https://npmjs.org/package/macaroon.css)

## Index

-   [Installation](#Installation)
-   [Setup Framework](#setup-framework)
    -   [Initialize Styles](#initialize-styles)
    -   [Override Defaults](#override-defaults)
    -   [Add Fonts](#add-fonts)

## Installation

Install via npm package manager

```bash
npm i macaroon.css
```

Install via yarn package manager

```bash
yarn add macaroon.css
```

## Setup Framework

### Initialize Styles

The framework is created using sass. To use it you need to set up you sass environment first. Create your main sass/scss file and add the following two
lines of code to the file.

```sass
@use "~macaroon/sass/init"
```

## Override Defaults

To override the default colors and grid sizes you only need to create a \_theme.scss file in your project main sass/scss folder and coping the following code in
to it.

Now you can override the theme colors and grid sizes to your need

```sass
@use "~macaroon/sass/init"
@use "theme"
```

### Add Fonts

Add some fonts to your project by going to [**Google Fonts** ](https://fonts.google.com/), select your font pair and 
add it before your **macaroon**
imports.

```sass
@use "theme"
@use "~macaroon/src/sass/init"
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap')
```

> **Update fonts in theme.sass file.**

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

-   [Claude Myburgh](https://github.com/designbycode)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
