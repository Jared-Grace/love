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
    const fullPath = path.join(path_folder, entry.name);
    if (entry.isFile()) {
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
