import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticRoute = async (req) => {
  if(req.method !== 'GET') return null;

  //   const URL = req.url === '/' ? 'index.html' : req.url;
  //   const urlJoinsies = path.join(__dirname, '../public', URL);

  try {
    if(req.url === '/') {
      const url = 'index.html';
      const goToTheUrl = path.join(__dirname, '../public', url);
      const fileHasBeenRead = await readFile(goToTheUrl, 'utf-8');
      return fileHasBeenRead;
    }
    else if (req.url === '/styles/main.css') {
      const goToTheUrl = path.join(__dirname, '../public', '/styles/main.css');
      const fileHasBeenRead = await readFile(goToTheUrl, 'utf-8');
      return fileHasBeenRead;
    }
  } catch (error) {
    return null;
  }

};

export default staticRoute;
