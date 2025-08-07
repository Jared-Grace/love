

import fs from 'fs';
import path from 'path';

export function folder_read(dirPath) {
  return fs.readdirSync(dirPath).filter(file => {
    return fs.statSync(path.join(dirPath, file)).isFile();
  });
}