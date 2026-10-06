import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function folder_read_recursive_skipped_async(
  path_folder,
  folders_skipped,
) {
  "Every file under a folder, named by its way down from that folder, with the named folders never entered.";
  "THE FINDINGS FROM A FOLDER ARE ADDED RATHER THAN SPREAD. They used to be handed over in a single call with each path as its own argument, which has a ceiling on it - so this worked on every small folder and threw on this repo, and the complaint it made was about the call stack rather than about a size. A walk reporting a stack overflow reads as a walk that never stops, which is the one thing wrong with it that it has never had.";
  let fs = await import("fs/promises");
  let path = await import("path");
  let result = [];
  let entries = await fs.readdir(path_folder, {
    withFileTypes: true,
  });
  for (let entry of entries) {
    let name = property_get(entry, "name");
    if (entry.isFile()) {
      result.push(name);
    } else if (entry.isDirectory()) {
      let n = list_includes_not(folders_skipped, name);
      if (n) {
        let fullPath = path.join(path_folder, name);
        let subFiles = await folder_read_recursive_skipped_async(
          fullPath,
          folders_skipped,
        );
        function lambda(f) {
          let v = path.join(name, f);
          return v;
        }
        let under = list_map(subFiles, lambda);
        list_add_multiple(result, under);
      }
    }
  }
  return result;
}
