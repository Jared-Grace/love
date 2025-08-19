import { fs } from "./fs.mjs";
import { path_join } from "./path_join.mjs";
import fs from "fs";
export function folder_read(folder_path) {
  function lambda(file) {
    let result = path_join([folder_path, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  let v2 = fs.readdirSync(folder_path).filter(lambda);
  return v2;
}
