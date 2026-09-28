import { arguments_assert } from "./arguments_assert.mjs";
import { text_commit_names } from "./text_commit_names.mjs";
import { git_commit_name_after_maps } from "./git_commit_name_after_maps.mjs";
import { property_set } from "./property_set.mjs";
import { catch_error_text_or_null } from "./catch_error_text_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function git_commit_names_renamed(reads, text) {
  "$plain text";
  "The commit names written in a text that some rewrite has since renamed, each with what it is called now - which is the whole of what has to change for that text to go on meaning what it said - kept apart from the shortened names too short to answer for.";
  "★ ONLY THE NAMES A RECORD ACTUALLY RENAMED COME BACK, AND THAT IS WHAT MAKES THE SHAPE-ONLY SEARCH SAFE. A row of hex digits that no record mentions is left out, so a colour, a key or the word deadbeef never reaches a caller as something to change. A name the records mention and give back unchanged is left out too, because there is nothing to change about it.";
  "★ ONE UNANSWERABLE NAME MUST NOT END THE SEARCH, SO IT IS COLLECTED RATHER THAN THROWN. Asking about a single name is the right place to refuse a shortened name that names two commits - the asker can write it out further. Sweeping a file is not: the file holds hundreds of names it did not choose, and stopping at the first ambiguous one would report nothing about any of the others and look like a clean file if the ambiguous one came last. They come back in their own list, which is a list of things for a person to look at rather than a list of things to change.";
  "★ WHAT COMES BACK IS PAIRS AND NEVER A CHANGED TEXT. The same text often holds a name twice, at different lengths, inside a longer word, or in a sentence about the rename rather than as a use of it - and only whoever owns the text knows which of those may be rewritten. Handing back a finished text would decide that here, out of sight of the one place able to judge it.";
  arguments_assert(arguments, 2);
  let names = text_commit_names(text);
  let renamings = [];
  let ambiguous = [];
  for (let name of names) {
    let box = {
      walked: null,
    };
    function git_commit_names_renamed_walked(box2, reads2, name2) {
      let walked = git_commit_name_after_maps(reads2, name2);
      property_set(box2, "walked", walked);
    }
    function git_commit_names_renamed_try() {
      git_commit_names_renamed_walked(box, reads, name);
    }
    let trouble = catch_error_text_or_null(git_commit_names_renamed_try);
    let troubled = not(null_is(trouble));
    if (troubled) {
      let unanswerable = {
        name,
        trouble,
      };
      list_add(ambiguous, unanswerable);
      continue;
    }
    let walked = property_get(box, "walked");
    let renamed = property_get(walked, "renamed");
    if (renamed) {
      let after = property_get(walked, "after");
      let steps = property_get(walked, "steps");
      let renaming = {
        before: name,
        after,
        steps,
      };
      list_add(renamings, renaming);
    }
  }
  let r = {
    renamings,
    ambiguous,
  };
  return r;
}
