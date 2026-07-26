import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function functions_code() {
  "Every function paired with the source it is written in - the whole codebase in the one shape a question about the code actually needs.";
  "This is the line that keeps getting written by hand. Five throwaway scripts in the temp folder open with their own copy of it, three of them by different people who had never seen the others: read the folder, keep the mjs files, read each one. Each copy spells it slightly differently and each was thrown away, so the next person wrote it again.";
  "Listing was never the missing part - the names and the paths both had functions already. Reading the source was the awkward part, and that is the only thing added here.";
  let to_paths = await functions_names_to_paths();
  let names = properties_get(to_paths);
  async function entry_of(name) {
    let f_path = property_get(to_paths, name);
    let code = await file_read(f_path);
    let entry = {
      name,
      f_path,
      code,
    };
    return entry;
  }
  let entries = await list_map_async(names, entry_of);
  return entries;
}
