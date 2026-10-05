// Задание 1: инициализация папки data и файла inventory.txt
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const INVENTORY = path.join(DATA_DIR, 'inventory.txt');
const HEADER = 'Название товара: Количество';

try {
  const dirExisted = fs.existsSync(DATA_DIR);
  if (!dirExisted) {
    fs.mkdirSync(DATA_DIR);
  }
  console.log(dirExisted ? 'Папка data уже существует' : 'Папка data создана');

  fs.writeFileSync(INVENTORY, HEADER, 'utf8');
  console.log('Файл inventory.txt создан');
} catch (error) {
  console.error('Ошибка инициализации:', error.message);
}
