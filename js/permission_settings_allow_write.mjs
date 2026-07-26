import { permission_grant_names } from "./permission_grant_names.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
export async function permission_settings_allow_write() {
  "write the shared settings file's allow list out from the JS list it is generated from, leaving every other key in the file exactly as it was";
  "this reads the list as the loaded module holds it, so running it on its own renders the file from what is on disk. A command that has just written a new name passes its own list to the taking-a-list twin instead, because the loader keeps the module it already loaded however many times the file underneath it is rewritten.";
  let names = permission_grant_names();
  let report = await permission_settings_allow_write_from(names);
  return report;
}
