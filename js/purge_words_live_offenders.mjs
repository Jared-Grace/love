import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { list_size } from "./list_size.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { git_folder_grep_case_blind_paths } from "./git_folder_grep_case_blind_paths.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function purge_words_live_offenders() {
  "Every place this repository is carrying, right now, one of the words a purge took out of its past - leaving out the places that word is allowed to stay.";
  "★ THE ANSWER NAMES THE FILE AND THE ROW OF THE LIST, NEVER THE WORD. The other reading was to say which word was found, which is friendlier to read and is exactly the leak. A gate's complaint is printed to a terminal, kept in scrollback, and pasted into a message the moment somebody asks what went wrong - and the whole reason the list lives outside every repo is that these words must not end up anywhere that travels. The row number is enough: the list has a handful of entries, the file is two folders away, and the path is the part anybody fixing this actually needs.";
  "A word is asked for where a word begins and is allowed to run on, so a name inside a longer name is found and a name that is only a run of letters inside an unrelated word is not.";
  "Capitals are ignored throughout, because whether a name was written with one is a fact about the sentence it sat in rather than about who it names.";
  "How many words were asked about travels out beside the offenders. Nothing found is what this says on a good day and also what it would say if the sweep stopped reaching anything, and the count is the only part of the answer that tells those apart.";
  arguments_assert(arguments, 0);
  let rows = await purge_words_allowed();
  let folder = await git_folder_love();
  let walked = list_size(rows);
  let offenders = [];
  for (let at = 0; less_than(at, walked); at++) {
    let row = rows[at];
    let word = row.word;
    let allowed = row.paths;
    let pattern = text_word_start_regex(word);
    let found = await git_folder_grep_case_blind_paths(folder, pattern);
    for (let path of found) {
      let unexpected = list_includes_not(allowed, path);
      if (unexpected) {
        list_add(offenders, {
          path,
          row: at,
        });
      }
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
