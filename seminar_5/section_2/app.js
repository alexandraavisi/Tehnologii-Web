import fs from 'fs';
import path from 'path';
import { rimraf } from 'rimraf';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'hello.txt');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('Director creat:', dirPath);
}

fs.writeFileSync(filePath, 'Salut! Acesta este un fisier test.');
console.log('Fisier creat:', filePath);

setTimeout(async () => {
  try {
    await rimraf(dirPath);
    console.log('Directorul a fost sters complet!');
  } catch (err) {
    console.error('Eroare la stergere:', err);
  }
}, 2000);
