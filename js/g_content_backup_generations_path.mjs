import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
import { path_join } from "./path_join.mjs";
export function g_content_backup_generations_path() {
  "Where the backup writes down which version of each file it already holds.";
  "It sits in the backup repo beside the content it describes, so the record is kept by the same history as the thing it is a record of, and losing one loses the other rather than leaving a record of files that are gone.";
  let folder = g_content_backup_folder();
  let joined = path_join([folder, "generations.json"]);
  return joined;
}
