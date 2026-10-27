import { fn_name } from "./fn_name.mjs";
import { app_a_download_paths } from "./app_a_download_paths.mjs";
import { list_map } from "./list_map.mjs";
import { list_property_exists_not_error } from "./list_property_exists_not_error.mjs";
export async function app_a_download() {
  ("Only the names of the files are handed over. Sending every file's contents up front took minutes, which is too long to wait on a phone; each file is fetched instead the first time the page reads it, by ",
    fn_name("app_a_download_file"),
    ".");
  let filtered = await app_a_download_paths();
  function lambda(path) {
    let r = {
      key: path,
    };
    return r;
  }
  let files = list_map(filtered, lambda);
  list_property_exists_not_error(files, "key");
  return files;
}
