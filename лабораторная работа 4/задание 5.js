// Задание 5: очистка — удалить temp_log.txt, переименовать inventory.txt
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const TEMP_LOG = path.join(DATA_DIR, 'temp_log.txt');
const FROM = path.join(DATA_DIR, 'inventory.txt');
const TO = path.join(DATA_DIR, 'inventory_final.txt');

try {
  if (fs.existsSync(TEMP_LOG)) {
    fs.unlinkSync(TEMP_LOG);
    console.log('temp_log.txt удалён');
  } else {
    console.log('temp_log.txt не найден — удалять нечего');
  }

  fs.renameSync(FROM, TO);
  console.log('inventory.txt переименован в inventory_final.txt');
} catch (error) {
  console.error('Ошибка:', error.message);
}
