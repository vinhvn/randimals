<div style="text-align:center">
  <img src="./docs/randimals-banner.png" width="1024px">
</div>

> Generate adorable and unique animal IDs for your projects.

## Usage

Start by installing the package locally into your project:

```bash
$ npm install randimals
# or
$ yarn add randimals
```

### API Examples

```js
const randimals = require('randimals');

console.log(randimals());
// "Astronomical Wallaby"

console.log(randimals(3));
// "Wearable Ceramic Responsible Grizzlybear"

console.log(randimals({ animals: 2, separator: '.' }));
// "Uninspired.Cow.Grub"
```

## Command Line Tool

If you install the package globally, you can use the command line tool:

```bash
$ npm install -g randimals
# or
$ yarn global add randimals
```

### CLI Examples

```shell
# default with no arguments
$ randimals
Bouncy Goose

# using different options
$ randimals -a 2 -s "_"
Gimmicky_Slippery_Raven
```

### CLI Usage

```shell
$ randimals -h

  Usage: randimals [options]

  Options:
    -V, --version              output the version number
    -a, --adjectives <number>  set the number of adjectives to output (default: 1)
    -n, --animals <number>     set the number of animals to output (default: 1)
    -s, --separator <string>   set the separator string between each adjective and noun (default: " ")
    -h, --help                 display help for command
```

## About

A simple package that I made to emulate the random string generation that Twitch and GfyCat use for their sites. I wanted to use the strings as unique IDs in another project of mine so I decided to try writing a package myself.

## Notes

Big thank you to GfyCat for the adjective and animal lists.

## License

Under the MIT License
