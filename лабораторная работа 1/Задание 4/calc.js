// Запуск: node calc.js 5 3
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

if (process.argv.length < 4 || Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Укажите два числа: node calc.js 5 3');
  process.exit(1);
}

console.log(`${a} + ${b} = ${a + b}`);
