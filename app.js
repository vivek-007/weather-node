const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs.options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', '-h')
  .argv;

// console.log(argv.address);
// console.log(encodeURIComponent(argv.address));

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 1));
  }
});

// 735c87b18469c5bad03a02c914a918c3
// https://api.darksky.net/forecast/735c87b18469c5bad03a02c914a918c3/15.3966057,73.8242621
