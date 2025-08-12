import { path_join } from "./path_join.mjs";
import fs from "fs";
export function folder_read(dirPath) {
  return fs.readdirSync(dirPath).filter((file) => {
    return fs.statSync(path_join([dirPath, file])).isFile();
  });
}
