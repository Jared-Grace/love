import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function app_learn_js_program_trace_name(
  name,
  value2,
  from,
  to,
  actions,
  within,
) {
  arguments_assert(arguments, 6);
  ("a name evaluated as the value it holds, added to actions; it is written in the line from from to to; within is the expression it stands in, or null when it stands alone");
  ("2026-11-11: handed the name and its value rather than looking the value up, so a.length - read as one name holding the array's size, as the expression lessons read it - is evaluated the same way a name is");
  list_add(actions, {
    kind: "evaluate",
    name,
    value: value2,
    from,
    to,
    expression: null,
    within,
    lead: "",
  });
  return value2;
}
