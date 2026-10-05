// Задание 4: создание файлов и список файлов в data
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');

try {
  ['categories.txt', 'suppliers.txt'].forEach((name) => {
    fs.writeFileSync(path.join(DATA_DIR, name), '');
  });

  const entries = fs.readdirSync(DATA_DIR);
  console.log('Количество файлов в data: ' + entries.length);
  for (let i = 0; i < entries.length; i++) {
    console.log((i + 1) + '. ' + entries[i]);
  }
} catch (error) {
  console.error('Ошибка:', error.message);
}
