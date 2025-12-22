import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function folder_read_recursive_async(path_folder) {
  let folders_skipped = [];
  const fs = await import("fs/promises");
  const path = await import("path");
  let result = [];
  const entries = await fs.readdir(path_folder, {
    withFileTypes: true,
  });
  for (const entry of entries) {
    let name = object_property_get(entry, "name");
    const fullPath = path.join(path_folder, name);
    if (entry.isFile()) {
      result.push(name);
    } else if (entry.isDirectory()) {
      let includes = list_includes_not(folders_skipped, name);
      if (includes) {
      }
      const subFiles = await folder_read_recursive_async(fullPath);
      function lambda(f) {
        let v = path.join(name, f);
        return v;
      }
      result.push(...subFiles.map(lambda));
    }
  }
  return result;
}
