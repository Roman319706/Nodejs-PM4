// Задание 3: добавление товара в конец inventory.txt
const fs = require('fs');
const path = require('path');

const INVENTORY = path.join(__dirname, 'data', 'inventory.txt');

const addItem = (title, count) => {
  const line = title + ': ' + count;
  try {
    fs.appendFileSync(INVENTORY, '\n' + line, 'utf8');
    console.log('Добавлено: ' + line);
  } catch (error) {
    console.error('Ошибка записи:', error.message);
  }
};

[
  ['Монитор', 10],
  ['Клавиатура', 25],
].forEach(([title, count]) => addItem(title, count));

try {
  const current = fs.readFileSync(INVENTORY, 'utf8');
  console.log(`\nТекущее содержимое:\n${current}`);
} catch (error) {
  console.error('Ошибка чтения:', error.message);
}
