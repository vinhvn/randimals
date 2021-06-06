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

### Examples

```js
const randimals = require('randimals');

// Default arguments generate an animal with one adjective
console.log(randimals());
// => "Astronomical Wallaby"

// Using a number as an argument specifies the amount of adjectives
console.log(randimals(3));
// => "Wearable Ceramic Responsible Grizzlybear"

// Using a string as an argument specifies the naming convention
console.log(randimals('snake'));
// => "depressed_alligator"

// Combine and mess around with different options!
console.log(randimals({
  adjectives: 2,
  animals: 2,
  case: 'upper',
  separator: '.'
}));
// "DESIROUS.UNINSPIRED.COW.GRUB"
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

# change amount of adjectives and animals
$ randimals -a 3 -n 2
Beamy Illtimed Comparable Neonbluehermitcrab Hoiho

# set the naming convention
$ randimals -f path
prolific/galapagosalbatross

# mix and match options
$ randimals -a 2 -c capital -s "_"
Gimmicky_Slippery_Raven
```

### CLI Usage

```shell
$ randimals -h

  Usage: randimals [options]

  Options:
    -V, --version              output the version number
    -a, --adjectives <number>  set the number of adjectives to output (default: "1")
    -n, --animals <number>     set the number of animals to output (default: "1")
    -f, --format <string>      set the naming convention for each word (ex: 'pascal', 'snake', 'capital', etc.) (default: "capital")
    -c, --case <string>        set the case for each word (ex: 'lower', 'upper', 'capital')
    -s, --separator <string>   set the separator string between each adjective and noun
    -h, --help                 display help for command
```

## About

A simple package that I made to emulate the random string generation that Twitch and GfyCat use for their sites. I wanted to use the strings as unique IDs in another project of mine so I decided to try writing a package myself. In the process, I learned a lot more about the TypeScript, Gulp, Browserify, and module ecosystem 😓

## Notes

Big thank you to GfyCat for the adjective and animal lists. Logo image is taken from [OpenMoji 13.0](https://openmoji.org/)

## License

Under the MIT License
