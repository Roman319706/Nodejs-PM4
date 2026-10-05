const os = require('os');

const BYTES_IN_GB = 1024 * 1024 * 1024;
const totalGb = (os.totalmem() / BYTES_IN_GB).toFixed(2);

const info = [
  ['Платформа:', os.platform()],
  ['Имя компьютера:', os.hostname()],
  ['Домашняя папка:', os.homedir()],
  ['Общий объём ОЗУ:', totalGb, 'ГБ'],
];

info.forEach((row) => console.log(...row));
