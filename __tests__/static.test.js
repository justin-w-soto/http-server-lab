
import request from 'supertest';
import { readFile } from 'fs/promises';
import app from '../lib/app.js';

describe('get static routes', () => {
  it('should return the index.html file from public folder using GET /', async () => {
    const [res, index] = await Promise.all([request(app).get('/'), 
      readFile('./public/index.html', 'utf-8')]);

    expect(res.text).toEqual(index);
  });

  it('should get the main.css file from GET /', async () => {
  
    const [res, index]  = await Promise.all([
      request(app).get('/styles/main.css'),
      readFile('./public/styles/main.css', 'utf-8')
    ]);
    expect(res.text).toEqual(index);
  });



});

