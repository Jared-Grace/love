import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { list_map } from "./list_map.mjs";
import { git_history_paths_absent_at_head } from "./git_history_paths_absent_at_head.mjs";
import { list_any } from "./list_any.mjs";
import { list_filter } from "./list_filter.mjs";
export async function git_history_paths_absent_words_named(folder, words) {
  "$plain folder";
  arguments_assert(arguments, 2);
  ("Of all the forgotten files a repository's history still carries, the ones these words name - each with the packed bytes it holds, heaviest first, in the shape the reading it came from returns.");
  ("★ THIS IS THE HALF OF A PURGE THAT TAKING WORDS OUT CANNOT REACH. Rewriting the inside of a file leaves the file, standing in every walk of the past under the name the words were in: a file emptied of every mention of a thing is still listed, by that thing's name, for ever. So a purge has to name paths as well as words, and the paths it should name are exactly the dead ones whose names the words claim. That list was being typed by hand from a report, which is the one place a wrong filename comes from, and a wrong filename in this job is silent in both directions - name one that never existed and nothing is dropped, name one letter wrong and a living file goes.");
  ("A word claims a name by the same rule it is taken out of file contents by, and that sameness is the point rather than a convenience. The rule is ",
    fn_name("text_word_start_regex"),
    " and is spelled nowhere else. Read by two rules, this would hand back a file whose contents a purge is going to rewrite but whose name it is going to leave, or a name it drops while the contents were allowed to stay - and neither mistake says anything when it happens.");
  ("Only paths the present no longer tracks, because that is all the reading underneath returns, and it is the right restriction rather than an inherited one: dropping the path of a file that is still live destroys live code. So a word that also names something in use cannot reach it through here at all, whatever else it matches.");
  ("Naming no words is refused rather than answered with everything or with nothing. Either answer would be a guess about which was meant, and the cost of guessing wrong here is paid against a history rewrite.");
  ("It reads and changes nothing, so it is safe to ask at any moment, including while a rehearsal of the purge itself is running on a copy somewhere else. Which of these should actually go stays a judgment for the human - a name can look like abandoned work and be the thing it was abandoned in favour of.");
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named to look for, and a purge that is handed no words has nothing to decide about - would you like to name the words whose forgotten files should be found?",
    folder,
  });
  function git_history_paths_absent_words_named_pattern(word) {
    let pattern = text_word_start_regex(word);
    return pattern;
  }
  let patterns = list_map(words, git_history_paths_absent_words_named_pattern);
  let rows = await git_history_paths_absent_at_head(folder);
  function git_history_paths_absent_words_named_row(row) {
    function git_history_paths_absent_words_named_hit(pattern) {
      let matcher = new RegExp(pattern);
      let hit = matcher.test(row.path);
      return hit;
    }
    let named = list_any(patterns, git_history_paths_absent_words_named_hit);
    return named;
  }
  let matched = list_filter(rows, git_history_paths_absent_words_named_row);
  return matched;
}
