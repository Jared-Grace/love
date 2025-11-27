import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function folder_read_files(path_folder) {
  let fs = await import("fs");
  marker("1");
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  const all = fs.readdirSync(path_folder);
  let files = all.filter(lambda);
  list_sort_string(files);
  return files;
}
