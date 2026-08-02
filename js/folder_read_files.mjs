import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { path_base } from "./path_base.mjs";
import { file_path_normalize } from "./file_path_normalize.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_map_combine_left } from "./list_map_combine_left.mjs";
import { property_get } from "./property_get.mjs";
import { folder_read_browser } from "./folder_read_browser.mjs";
import { browser_is } from "./browser_is.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { path_join } from "./path_join.mjs";
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
  ("Reading the folder already says which entries are files - asking the disk again about each one costs a system call per entry and answers what is in hand. Over the seven thousand function files that was half a second on every question, and the questions are asked constantly.");
  ("A link is the one entry the folder cannot answer for. It is reported as a link rather than as whatever it points at, so those and only those are asked about individually - which keeps the old answer exactly, since following a link to a real file is what the asking always did.");
  function lambda(entry) {
    let link = entry.isSymbolicLink();
    if (link) {
      let result = path_join([path_folder, entry.name]);
      try {
        let v = fs.statSync(result).isFile();
        return v;
      } catch (e) {
        if (equal(e.code, "ENOENT")) {
          return false;
        }
        throw e;
      }
    }
    let b = entry.isFile();
    return b;
  }
  let all = fs.readdirSync(path_folder, {
    withFileTypes: true,
  });
  let entries = all.filter(lambda);
  function lambda_name(entry) {
    let name = entry.name;
    return name;
  }
  let files = list_map(entries, lambda_name);
  list_sort_text(files);
  return files;
}
