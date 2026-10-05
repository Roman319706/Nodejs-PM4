const path = require('path');

const appConfig = path.join(__dirname, '..', 'config', 'app.json');

console.log('Путь к app.json:', appConfig);
console.log('Имя файла:   ', path.basename(appConfig));
console.log('Расширение:  ', path.extname(appConfig));
