import { path_join } from "./path_join.mjs";
import fs from "fs";
export function folder_read(path_folder) {
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  let v2 = fs.readdirSync(path_folder).filter(lambda);
  return v2;
}
