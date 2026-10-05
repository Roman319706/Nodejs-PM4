const { basename, extname, dirname } = require('path');

console.log('__dirname: ', __dirname);
console.log('__filename:', __filename);

console.log('Имя файла:    ', basename(__filename));
console.log('Расширение:   ', extname(__filename));
console.log('Папка файла:  ', dirname(__filename));
