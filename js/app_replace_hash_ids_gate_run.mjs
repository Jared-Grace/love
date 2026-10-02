import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_hash_ids_walked } from "./app_replace_hash_ids_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_replace_hash_ids_gate_run() {
  "Gate: every rule set a replace link can name has a word of its own, every goal has a code of its own within its set, and none of them could be read as a place counted in an older link.";
  "Against zero, because a clash is a saved link opening an exercise other than the one it was taken from, and nothing on the page would say so. The fix is always to reword the rule set's name or change the goal, never to widen what is allowed.";
  "How many words were looked at travels out beside the verdict. The rule sets are read from one function, and a reading pointed at an empty list of them finds no clash in it and says so in the same word as a reading that checked them all - so the count is the only part of the answer that falls on the day the reading stops reaching the rule sets.";
  arguments_assert(arguments, 0);
  let walked = app_replace_hash_ids_walked();
  let clashing = property_get(walked, "clashing");
  list_empty_is_assert_json(clashing, {
    hint: "two things a replace link names come out as the same word, or a word would read as a place in its list - reword the rule set's name, or change one of the goals",
  });
  let words = property_get(walked, "words");
  let r = {
    words,
  };
  return r;
}
