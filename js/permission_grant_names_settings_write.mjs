import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_grant_names_settings_write(names) {
  "writes the granted-names list and regenerates the settings file from the same names, and hands back how many allow rules that came to";
  "the two writes are one act and never two. the list is the source and the settings file is generated from it, so a run that writes one and not the other leaves Claude's approvals disagreeing with the record of them - which is the drift the restore command exists to repair, and it has been repaired by hand more than once.";
  "every function that changes the granted names did these same three lines, and each one was a place the pair could come apart. saying it once means a fifth writer gets the pairing by calling this rather than by remembering it.";
  await permission_grant_names_write(names);
  let written = await permission_settings_allow_write_from(names);
  let allow = property_get(written, "allow");
  return allow;
}
