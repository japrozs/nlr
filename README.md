# Nlr

<a href="https://www.producthunt.com/posts/nlr-node-module-resolver?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nlr-node-module-resolver" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=298323&theme=dark" alt="nlr (Node Module Resolver) - A CLI to prevent you from downloading packages again & again | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

![Nlr Logo](/assets/nlr.png)
<br>
Nlr (`Node module resolver`) is a command line utility that stores `npm` modules in a safe place and prevetn your from installing the same module for different projects again and again.

## Aim

`nlr` is aimed for reducing the space hogged by the `node_modules` folder in ever `node.js` project.

## Installation

To install `nlr`, enter the following command in the terminal:

```bash
npm install -g nlr
```

## Usage

To use `nlr` you have to install package globally, and then `add` them to your project.

For example, if you want to use the `commander` module in your project, you will have to install the `commander` module to your system through the following command:

```bash
nlr install commander
```

The above command can be run form anywhere in the terminal.

To use the module in your project, run the following command inside of your project directory:

```bash
npm init -y
nlr add commander
```

That's it. Your ready to use `commander`. You can use it in your project and import it normally

```javascript
const { program } = require("commander");
// import { program } from "commander" // If you are using ES6 syntax
// ...
```

## Contributing

We love adding new features to our projects. If you have a new idea, a new bug report or a feature request, please feel free to create a new `issue` and explain.

## License : `MIT`
