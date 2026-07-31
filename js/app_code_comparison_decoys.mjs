import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_comparison_decoys(question, answer) {
  "the decoys for a comparison question: a comparison is either true or false, so the one wrong answer is always the opposite boolean. Shared by every comparison lesson - equality, order, trichotomy, and order-or-equal - which all had this same body copied out.";
  let true_text = js_keyword_true();
  let is_true = equal(answer, true_text);
  let on_true = js_keyword_false();
  let on_false = js_keyword_true();
  let opposite = ternary(is_true, on_true, on_false);
  let r = [opposite];
  return r;
}
