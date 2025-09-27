import { marker } from "./marker.mjs";
import { path_join } from "./path_join.mjs";
import fs from "fs";
export function folder_read_files(path_folder) {
  marker("1");
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  const all = fs.readdirSync(path_folder);
  let files = all.filter(lambda);
  return files;
}
