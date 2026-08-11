import { equal } from "./equal.mjs";
import { git_commit_full } from "./git_commit_full.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { qa_promoted_app_write } from "./qa_promoted_app_write.mjs";
export async function qa_promoted_commits_full_repair() {
  "Writes out in full every commit the note of waiting apps holds under a shortened name, and says which ones it had to";
  "Every other record of commits is kept under the whole forty characters, so a shortened one looks up as nothing there. What comes back then is not that the commit was written down oddly but that nobody ever judged it, and that refuses the sending of every app waiting beside the one at fault. The place that writes the note spells the whole name now, so this is only for the notes written before it did";
  "It finds its own set rather than being handed one, and it asks about every app, because which ones were written down short is not something anybody remembers";
  "Asking each name for its whole form is also what settles whether it needs repairing, so there is nothing here that counts characters and nothing to change if the whole form is ever a different length. A name already written in full comes back as itself and is left alone, which is what lets this be run again over a note it has already put right";
  let promoted = await qa_promoted();
  let app_names = object_property_names(promoted);
  let repaired = [];
  for (let app_name of app_names) {
    let note = property_get(promoted, app_name);
    let commit = property_get(note, "commit");
    let full = await git_commit_full(commit);
    let whole = equal(commit, full);
    if (not(whole)) {
      let hashes = property_get(note, "hashes");
      await qa_promoted_app_write(app_name, commit, hashes);
      list_add(repaired, {
        app: app_name,
        commit,
        full,
      });
    }
  }
  return repaired;
}
