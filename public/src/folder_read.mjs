import { path_join } from "./path_join.mjs";
import fs from "fs";
export function folder_read(dirPath) {
  function lambda(file) {
    let result = path_join([dirPath, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  let v2 = fs.readdirSync(dirPath).filter(lambda);
  return v2;
}
