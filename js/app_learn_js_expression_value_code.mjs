import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
import { json_to } from "./json_to.mjs";
import { text_to } from "./text_to.mjs";
export function app_learn_js_expression_value_code(value) {
  arguments_assert(arguments, 1);
  ('the code a value already worked out is written as inside an expression line: 6 as 6, true as true, and a piece of text in its quotes, as "peace"');
  ("Text in quotes because the line is code: peace with no quotes is a name, and a learner reading a[2] step to peace would be shown a name that was never there. Arrived with the array lessons, 2026-11-09, the first to work a line out to a piece of text.");
  if (text_is(value)) {
    let quoted = json_to(value);
    return quoted;
  }
  let text = text_to(value);
  return text;
}
