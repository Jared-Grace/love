import { app_replace_hash_ids_clashing } from "./app_replace_hash_ids_clashing.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_replace_hash_ids_gate_run() {
  "Gate: every rule set a replace link can name has a word of its own, every goal has a code of its own within its set, and none of them could be read as a place counted in an older link.";
  "Against zero, because a clash is a saved link opening an exercise other than the one it was taken from, and nothing on the page would say so. The fix is always to reword the rule set's name or change the goal, never to widen what is allowed.";
  let clashing = app_replace_hash_ids_clashing();
  list_empty_is_assert_json(clashing, {
    hint: "two things a replace link names come out as the same word, or a word would read as a place in its list - reword the rule set's name, or change one of the goals",
  });
}
