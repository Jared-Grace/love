import { path_join } from "./path_join.mjs";
import { marker } from "./marker.mjs";
export function folder_read() {
  marker("1");
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  const all = fs.readdirSync(path_folder);
}
