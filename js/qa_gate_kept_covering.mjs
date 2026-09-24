import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_entry_beside_matching_is } from "./qa_commit_entry_beside_matching_is.mjs";
import { git_commit_behind_count } from "./git_commit_behind_count.mjs";
import { equal } from "./equal.mjs";
export async function qa_gate_kept_covering(mine, before) {
  "$plain mine";
  "A judged commit that already holds this one, and what was found there - or null when none does. Read-only.";
  "★ EVERY COMMIT HERE IS ON ONE LINE, SO A LATER COMMIT HOLDS ALL THE EARLIER ONES. Whoever asks for the gates after committing is asking whether their own work is sound, and a judging of any commit that holds it answers that. Measured 2026-09-24: five whole-repo runs were waiting in line at once, each about to judge a newer commit than the one its caller made, and every one of them after the first was answering a question the first had already answered.";
  "A commit is held when nothing in it is missing from the judged one - counted, not guessed, so a commit on a line that went elsewhere is never taken for held.";
  "Only an entry judged beside the same neighbouring repos counts, for the same reason the exact-commit lookup asks it: a gate can read those repos, so a verdict given beside different ones is about different code.";
  arguments_assert(arguments, 2);
  let known = await qa_commit_named();
  for (let commit of object_property_names(known)) {
    let entry = property_get(known, commit);
    let matching = qa_commit_entry_beside_matching_is(entry, before);
    if (matching) {
      let missing = await git_commit_behind_count(commit, mine);
      let held = equal(missing, 0);
      if (held) {
        let r = {
          commit,
          entry,
        };
        return r;
      }
    }
  }
  return null;
}
