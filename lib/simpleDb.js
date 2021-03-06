import shortid from 'shortid';
import path from 'path';
import { writeFile, readFile, readdir, rm } from 'fs/promises';


class SimpleDb {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }
  getPath(id) {
    return `${this.rootDir}/${id}.json`;
  }
  async save(obj) {
    obj.id = shortid.generate();
    return await this.update(obj);
  }
  async update(obj) {
    const filePath = this.getPath(obj.id);
    return await writeFile(filePath, JSON.stringify(obj));
  }
  async get(id) {
    const filePath = this.getPath(id);
    try{
      const data = await readFile(filePath, 'utf-8');
      return JSON.parse(data);
    }
    catch (err) {
      if(err.code === 'ENOENT') return null;
      throw err;
    }
  }
  async getAll() {
    const files = await readdir(this.rootDir);
    const ids = files.map(file => path.basename(file, '.json'));
    return Promise.all(ids.map(id => this.get(id)));
  }
  async delete(id) {
    const filePath = this.getPath(id);
    return rm(filePath);
  }
}

export default SimpleDb;
