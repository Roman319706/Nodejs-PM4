// Запуск: node hello.js <Имя>
const name = process.argv[2];

if (name) {
  console.log(`Привет, ${name}!`);
} else {
  console.log('Привет, Незнакомец!');
}
