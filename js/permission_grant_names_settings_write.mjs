import { list_unique } from "./list_unique.mjs";
import { permission_grant_names_written_assert } from "./permission_grant_names_written_assert.mjs";
import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_grant_names_settings_write(names) {
  "writes the granted-names list and regenerates the settings file from the same names, and hands back how many allow rules that came to";
  "the two writes are one act and never two. the list is the source and the settings file is generated from it, so a run that writes one and not the other leaves Claude's approvals disagreeing with the record of them - which is the drift the restore command exists to repair, and it has been repaired by hand more than once.";
  "every function that changes the granted names did these same three lines, and each one was a place the pair could come apart. saying it once means a fifth writer gets the pairing by calling this rather than by remembering it.";
  "the write is read back before the count is handed over, so a caller that is told how many rules it wrote has been told the truth about the file. Every writer of the names passes through here, which is why the check lives here and not in the adder - a removal and a rename owe the same answer.";
  "the rules are generated from the names the list writer says it wrote, never from the ones it was handed, because it drops a name spelled twice - and a settings file generated from the longer list would carry a rule the list no longer accounts for, which is the drift this function exists to prevent";
  let listed = await permission_grant_names_write(names);
  let spelled = property_get(listed, "spelled");
  let written = await permission_settings_allow_write_from(spelled);
  await permission_grant_names_written_assert(spelled);
  let allow = property_get(written, "allow");
  return allow;
}
