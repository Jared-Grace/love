import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { file_read } from "./file_read.mjs";
import { text_words_start_removed } from "./text_words_start_removed.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function file_words_start_removed(file_path, words_text) {
  "$plain file_path";
  "$plain words_text";
  arguments_assert(arguments, 2);
  ("Takes the named words out of one file in the present by the rule the history rewrite uses, so that file comes out of the rewrite unchanged. Answers whether anything was taken.");
  ("Made for the records the machine writes about itself, which quote whatever a gate complained about - including names that are about to be taken out of the past. Left alone, such a record is the one file the rewrite would change in the present, and one changed file is enough to stop the branch being moved without touching anyone's working files.");
  let words = text_split_comma(words_text);
  let before = await file_read(file_path);
  let after = text_words_start_removed(before, words);
  let changed = not_equal(before, after);
  if (changed) {
    await file_overwrite(file_path, after);
  }
  return changed;
}
