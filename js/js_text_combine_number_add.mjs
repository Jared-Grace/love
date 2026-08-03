import { fn_name } from "./fn_name.mjs";
import { js_text_combine_number_calls } from "./js_text_combine_number_calls.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_text_combine_number_add(ast) {
  "Changes every joining of text whose right-hand side is a plain number into an addition, which is what such a call has always done.";
  "The two functions hold the very same line, so this cannot alter what the file does - only what it says it is doing. That is the whole point: a step counted onward by one is arithmetic, and calling it a joining of text sends every later reader looking for a word that is not there.";
  "Only a number written out on the spot counts, and which calls those are is settled next door rather than here, so the audit that reports them and this change that clears them can never disagree about what they are looking at.";
  let name_after = fn_name("add");
  let calls = js_text_combine_number_calls(ast);
  for (let call of calls) {
    let callee = property_get(call, "callee");
    property_set(callee, "name", name_after);
  }
}
