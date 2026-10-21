import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_size } from "./text_size.mjs";
import { js_parse_expression_at } from "./js_parse_expression_at.mjs";
export function app_code_program_trace_long_way(
  expression,
  name,
  symbol,
  right_text,
  actions,
  code,
) {
  arguments_assert(arguments, 6);
  ("a line written the shorter way, a += b; or a++;, is first written out the long way, a = a + b;, as an action of its own; what is handed back is the program as it reads with the long line in place, and the long expression parsed in it, so the caller runs it as it runs any line written that way, and every place the steps after name is a place in that program");
  ("2026-10-21, at the human's asking: writing it the long way is a step the learner chooses, and the line then reads the long way, so what follows is asked as it is of a = a + 1;. Not picked: running the shorter line as it stands, the name's value asked for without a place in the line and the operator's value written over the += - done first, 2026-10-15, when writing the line out was said to be a change that solves nothing");
  let compound_from = property_get(expression, "start");
  let compound_to = property_get(expression, "end");
  let compound = text_slice(code, compound_from, compound_to);
  let long = text_combine_multiple([
    name,
    " = ",
    name,
    " ",
    symbol,
    " ",
    right_text,
  ]);
  list_add(actions, {
    kind: "expand",
    name,
    from: compound_from,
    to: compound_to,
    written: long,
    compound,
  });
  let before = text_slice(code, 0, compound_from);
  let to = text_size(code);
  let after = text_slice(code, compound_to, to);
  let code_long = text_combine_multiple([before, long, after]);
  let expression_long = js_parse_expression_at(code_long, compound_from);
  let r = {
    expression: expression_long,
    code: code_long,
  };
  return r;
}
