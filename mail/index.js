'use strict';
const Mustache = require('mustache');
const fs = require('fs');
​
const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: 'utf8'
      },
      (error, data) => {
        if (error !== null) {
          reject(error);
          return;
        }
        resolve(data);
      }
    );
  });
};
​
const main = async () => {
  try {
    const template = await readFileContent('mail.template');
    // Mustache.parse()は、テンプレートをキャッシュに入ります。性能が向上するために。
    Mustache.parse(template);
    const data = {
      name: 'Alex',
      email: 'alex@example.com'
    };
    const rendered = Mustache.render(template, data);
    console.log(rendered);
  } catch (error) {
    console.error(error);
  }
};
main();