// удалить пустые строки
const fs = require('fs');
const FILENAME = 'README.md';
try {
	const data = fs.readFileSync(FILENAME, 'utf8');
	const result = data.replace(/^\s*[\r\n]/gm, '');
	fs.writeFileSync(FILENAME, result);
} catch (err) {
	console.log(`Ошибка чтения файла ${FILENAME}: ${err}`);
}