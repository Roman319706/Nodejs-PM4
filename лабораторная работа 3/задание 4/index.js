const path = require('path');

const files = ['photo.jpg', 'document.pdf', 'music.mp3', 'script.js'];
const uploadsDir = path.join(__dirname, 'uploads');

files.forEach((name) => {
  console.log('Файл: ' + name);
  console.log('  Расширение: ' + path.extname(name));
  console.log('  Полный путь: ' + path.join(uploadsDir, name));
});
