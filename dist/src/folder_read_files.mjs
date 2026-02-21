import { list_map } from "../../../love/public/src/list_map.mjs";
import { path_base } from "../../../love/public/src/path_base.mjs";
import { file_path_normalize } from "../../../love/public/src/file_path_normalize.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { folder_read_browser } from "../../../love/public/src/folder_read_browser.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function folder_read_files(path_folder) {
  if (browser_is()) {
    path_folder = file_path_normalize(path_folder);
    let r = await folder_read_browser(path_folder);
    let filtered = property_get(r, "filtered");
    let prefix = property_get(r, "prefix");
    let unique = property_get(r, "unique");
    let combineds = list_map_combine_left(unique, prefix);
    let r2 = list_intersect(filtered, combineds);
    let r3 = list_map(r2, path_base);
    return r3;
  }
  let fs = await import("fs");
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  const all = fs.readdirSync(path_folder);
  let files = all.filter(lambda);
  list_sort_text(files);
  return files;
}
