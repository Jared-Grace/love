import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_declare(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("a let line run: its name declared, what is right of the = worked out, and the value assigned to the name, each added to actions, and the name given the value in values");
  let declarations = property_get(node, "declarations");
  list_size_assert(declarations, 1);
  let declaration = list_get(declarations, 0);
  let id = property_get(declaration, "id");
  let name = property_get(id, "name");
  let init = property_get(declaration, "init");
  list_add(actions, {
    kind: "declare",
    name,
    from: property_get(id, "start"),
    to: property_get(id, "end"),
  });
  ("a declare says where its name is written, and an assign where what is right of the = is written, as an evaluate says where its name is, so a stepper can send a copy of either into the note it writes");
  let value = app_code_program_trace_value(init, actions, code, values);
  list_add(actions, {
    kind: "assign",
    name,
    value,
    from: property_get(init, "start"),
    to: property_get(init, "end"),
    long: null,
  });
  property_set(values, name, value);
}
