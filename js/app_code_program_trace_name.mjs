import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_program_trace_name(
  node,
  from,
  to,
  actions,
  within,
  values,
) {
  arguments_assert(arguments, 6);
  ("a name evaluated by looking up the value it holds, added to actions; it is written in the line from from to to; within is the expression it stands in, or null when it stands alone");
  let name = property_get(node, "name");
  let value2 = property_get(values, name);
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
