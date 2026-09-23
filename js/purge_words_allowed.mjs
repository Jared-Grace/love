import { arguments_assert } from "./arguments_assert.mjs";
import { purge_words_allowed_path } from "./purge_words_allowed_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { assert_json } from "./assert_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function purge_words_allowed() {
  "The words that must not come back into this repository, each with the places it is still allowed to appear, read from the file outside every repo that holds them.";
  "★ A MISSING FILE THROWS RATHER THAN PASSING QUIETLY, AND THAT IS THE WHOLE POINT OF WRITING IT THIS WAY. The other reading was to treat an absent list as nothing to check and let the gate go green. That is a check that cannot disagree: it would say the same thing on the day nothing is wrong and on the day the list was deleted, renamed or looked for in the wrong folder, and the second of those is exactly how a guard like this dies - silently, months before anybody notices it stopped guarding.";
  "An empty list is refused for the same reason. A file that parses and says nothing is the same silence wearing a valid shape.";
  "The cost of throwing is that a copy of this repository without the file cannot run the gate. That is accepted rather than worked around: the words are the one part that may not travel with the code, so a checkout somewhere else genuinely cannot answer this question, and saying so out loud is better than answering it wrongly.";
  arguments_assert(arguments, 0);
  let path = purge_words_allowed_path();
  let there = await file_exists(path);
  assert_json(there, {
    hint: "the list of words that must not come back is not where it is kept, so nothing can be checked - and a run that checked nothing would look exactly like a run that found nothing wrong. Write the list at the path below, as a list of rows each naming one word and the paths it is still allowed to appear in",
    path,
  });
  let rows = await file_read_json(path);
  list_is_assert(rows);
  let any = list_empty_not_is(rows);
  assert_json(any, {
    hint: "the list of words that must not come back is there but names none, so every run of the gate would pass without looking at anything. Either put the words in it or take the gate out - an empty guard is worse than no guard, because it reads as a guard",
    path,
  });
  return rows;
}
