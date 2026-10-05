// Задание 2: чтение inventory.txt
const fs = require('fs');
const path = require('path');

const INVENTORY = path.join(__dirname, 'data', 'inventory.txt');
const WARNING = 'Инвентарь не инициализирован';

try {
  const text = fs.existsSync(INVENTORY) ? fs.readFileSync(INVENTORY, 'utf8') : '';
  console.log(text.trim().length === 0 ? WARNING : text);
} catch (error) {
  console.error('Ошибка чтения:', error.message);
}
