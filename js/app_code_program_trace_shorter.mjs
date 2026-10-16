import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
import { app_code_operator_solve } from "./app_code_operator_solve.mjs";
import { text_size } from "./text_size.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_shorter(
  expression,
  target,
  operator,
  symbol,
  right_text,
  right_get,
  lead,
  actions,
  values,
  code,
) {
  arguments_assert(arguments, 10);
  ("a line written the shorter way, a += b; or a++;, run as its long way a = a + b; is: the name's value asked for without being written into the line, since 1 += 8 would read as giving a value to 1; then the right side, by right_get; then the operator, its value written into the line from the operator to the end, after lead, so a += 8 reads a = 9; then the assign, whose value is the one written there");
  let name = property_get(target, "name");
  property_exists_assert(values, name);
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
  let held = property_get(values, name);
  list_add(actions, {
    kind: "evaluate",
    name,
    value: held,
    from: null,
    to: null,
    expression: null,
    within: compound,
    lead: "",
  });
  let right_value = right_get();
  let held_written = json_to(held);
  let right_written = json_to(right_value);
  let index_from = property_get(target, "end");
  let operator_from = text_index_of_from(code, operator, index_from);
  let value = app_code_operator_solve(held, symbol, right_value);
  let solved = text_combine_multiple([
    held_written,
    " ",
    symbol,
    " ",
    right_written,
  ]);
  list_add(actions, {
    kind: "evaluate",
    name: solved,
    value,
    from: operator_from,
    to: compound_to,
    expression: {
      left: held,
      operator: symbol,
      right: right_value,
    },
    within: text_combine_multiple([name, " = ", solved]),
    lead,
    whole: solved,
    whole_value: value,
  });
  ("the value assigned is the one now written after lead, so it starts there; it ends where the line's untouched end begins, which the stepper finds from to");
  let lead_size = text_size(lead);
  let value_from = add(operator_from, lead_size);
  list_add(actions, {
    kind: "assign",
    name,
    value,
    from: value_from,
    to: compound_to,
    long,
  });
  property_set(values, name, value);
}
