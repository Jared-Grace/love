import { ai_git_noted } from "./ai_git_noted.mjs";
import { literals_frozen_storage_walked } from "./literals_frozen_storage_walked.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { literals_frozen_name_add } from "./literals_frozen_name_add.mjs";
export async function literals_frozen_storage_repair() {
  "Puts on the frozen list exactly the words a browser database is opened with that nothing has frozen yet, then asks again to say whether any are left";
  "It finds its own set rather than taking one, so it cannot drift from what the gate actually names. Each word is committed the moment it lands, under the command that froze it, so a sweep by somebody else cannot take it first and file it as a hand edit";
  "What it cannot write is the paragraph above each added line saying how the word escaped - that stays with whoever knows, exactly as it does for the one-at-a-time command";
  await ai_git_noted();
  let walked = await literals_frozen_storage_walked();
  let offenders = property_get(walked, "offenders");
  function imported_get(pair) {
    let parts = text_split(pair, " -> ");
    let imported = list_last(parts);
    return imported;
  }
  let imported_all = list_map(offenders, imported_get);
  let names = list_unique(imported_all);
  for (let name of names) {
    await function_call_commit(literals_frozen_name_add, [name]);
  }
  let after = await literals_frozen_storage_walked();
  let remaining = property_get(after, "offenders");
  let r = {
    frozen: names,
    remaining,
  };
  return r;
}
