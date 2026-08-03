import { firebase_chapter_upload_folders } from "./firebase_chapter_upload_folders.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function firebase_chapter_upload_folders_unfrozen() {
  "Every place a chapter's upload address is built out of a folder word that no watched function holds - each answer naming the function building the address and what it handed over as the folder.";
  "A word written straight into the line that builds the address is unwatched by construction: the freeze record is keyed by function, so a value with no function holding it has nothing to freeze, and retyping it reads as an ordinary edit to an ordinary line.";
  "This asks a narrower question than it could: not whether the folder is right, which nobody here can know, but whether anything at all is watching it. That is answerable, and it is the whole difference between a wrong word being loud and being silent.";
  "The word nothing holds and the word a function holds that nobody froze are one finding rather than two. Both end with a bucket address that a later edit can move quietly, and the repair for both is the same - give it a function and put that function on the frozen list.";
  let sites = await firebase_chapter_upload_folders();
  let watched = literals_frozen_names();
  let offenders = [];
  for (let site of sites) {
    let caller = property_get(site, "caller");
    let held_by = property_get(site, "held_by");
    let unheld = null_is(held_by);
    if (unheld) {
      let item = text_combine_multiple([caller, " -> nothing"]);
      list_add(offenders, item);
      continue;
    }
    let frozen = list_includes(watched, held_by);
    if (frozen) {
      continue;
    }
    let item2 = text_combine_multiple([caller, " -> ", held_by]);
    list_add(offenders, item2);
  }
  offenders.sort();
  return offenders;
}
