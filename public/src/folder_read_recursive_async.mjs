import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function folder_read_recursive_async(path_folder) {
  let folders_skipped = [];
  const fs = await import("fs/promises");
  const path = await import("path");
  let result = [];
  const entries = await fs.readdir(path_folder, {
    withFileTypes: true,
  });
  for (const entry of entries) {
    let name2 = object_property_get(entry, "name");
    const fullPath = path.join(path_folder, entry.name);
    if (entry.isFile()) {
      let includes = list_includes(folders_skipped, entry.name);
      result.push(entry.name);
    } else if (entry.isDirectory()) {
      log(entry.name);
      const subFiles = await folder_read_recursive_async(fullPath);
      function lambda(f) {
        let v = path.join(entry.name, f);
        return v;
      }
      result.push(...subFiles.map(lambda));
    }
  }
  return result;
}
