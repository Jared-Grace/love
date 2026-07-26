import { permission_grant_names } from "./permission_grant_names.mjs";
import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
export async function permission_grant_names_rewrite() {
  "write the list of granted names back out from itself, changing nothing about which names are on it";
  "what this is for is proving that the renderer and the file agree. Reading the list and rendering it again has to leave the file byte for byte as it was; if it does not, the file has been edited by hand into a shape the renderer would never produce, and the next command that adds a name would silently undo that edit along the way.";
  let names = permission_grant_names();
  let report = await permission_grant_names_write(names);
  return report;
}
