const fs = require("fs");
const glob = require("glob");
const mkdirp = require("mkdirp");
const _ = require("lodash");

const MESSAGES_PATTERN = "./public/messages/**/*.json";
const LANG_DIR = "./public/locales/";
const LANG_PATTERN = "./public/locales/*.json";

// Try to delete current json files from public/locales
try {
  fs.unlinkSync("./public/locales/data.json");
} catch (error) {
  console.log(error);
}

// Merge translated json files (es.json, fr.json, etc) into one object
// so that they can be merged with the eggregated "en" object below

const mergedTranslations = glob
  .sync(LANG_PATTERN)
  .map(filename => {
    const locale = _.last(filename.split("/")).split(".json")[0];
    return { [locale]: JSON.parse(fs.readFileSync(filename, "utf8")) };
  })
  .reduce((acc, localeObj) => {
    return { ...acc, ...localeObj };
  }, {});

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.

const defaultMessages = glob
  .sync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, "utf8"))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

// Create a new directory that we want to write the aggregate messages to
mkdirp.sync(LANG_DIR);

// Merge aggregated default messages with the translated json files and
// write the messages to this directory
fs.writeFileSync(
  `${LANG_DIR}data.json`,
  JSON.stringify({ en: defaultMessages, ...mergedTranslations }, null, 2)
);
