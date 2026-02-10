import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function folder_read_recursive_skipped_async(
  path_folder,
  folders_skipped,
) {
  const fs = await import("fs/promises");
  const path = await import("path");
  let result = [];
  const entries = await fs.readdir(path_folder, {
    withFileTypes: true,
  });
  for (const entry of entries) {
    let name = property_get(entry, "name");
    if (entry.isFile()) {
      result.push(name);
    } else if (entry.isDirectory()) {
      let n = list_includes_not(folders_skipped, name);
      if (n) {
        const fullPath = path.join(path_folder, name);
        const subFiles = await folder_read_recursive_skipped_async(
          fullPath,
          folders_skipped,
        );
        function lambda(f) {
          let v = path.join(name, f);
          return v;
        }
        result.push(...subFiles.map(lambda));
      }
    }
  }
  return result;
}
