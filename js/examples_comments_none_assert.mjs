import { property_get } from "./property_get.mjs";
import { js_code_comments_none_assert } from "./js_code_comments_none_assert.mjs";
import { each } from "./each.mjs";
export function examples_comments_none_assert(parseds) {
  "Refuse to go on if any of these example files still carries a comment. The corpus is rewritten by the tree - a rename walks it the same way it walks every other file here - and a comment lives nowhere in a tree, so the rewrite that keeps the corpus true would quietly delete every remark in it.";
  "This is asked of a whole list at once rather than one file at a time, because both callers need the same thing: the rename must know before it writes anything, and the gate must know before a rename is ever attempted. Splitting that judgement in two would let the two drift, and the one that drifts is the one that deletes.";
  function remarks_none_assert(parsed) {
    let code = property_get(parsed, "code");
    let f_path = property_get(parsed, "f_path");
    js_code_comments_none_assert(code, f_path);
  }
  each(parseds, remarks_none_assert);
}
