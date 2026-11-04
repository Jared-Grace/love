import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_app_chunks_orphaned } from "./folder_app_chunks_orphaned.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export async function folder_app_file_names_reached(folder, app_name) {
  "$plain folder";
  "$plain app_name";
  "The pieces of one app sitting in one folder that the app itself can load: its page, its script, and the extra scripts reached by walking out from that script.";
  "Asking the folder alone answers with two builds piled together, because a build never takes away a file it has stopped writing. A piece no walk reaches is left over from an earlier build, so it can hold words the app has since stopped carrying.";
  let present = await folder_app_file_names(folder, app_name);
  let orphaned = await folder_app_chunks_orphaned(folder, app_name);
  let reached = list_without_multiple(present, orphaned);
  return reached;
}
