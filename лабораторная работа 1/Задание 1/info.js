const os = require('os');

console.log('Версия Node.js:', process.version);
console.log('Операционная система:', os.type(), `(${process.platform})`);
