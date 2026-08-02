import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
export function js_function_declaration_property_params_names(
  object,
  property_name,
) {
  arguments_assert(arguments, 2);
  ("The names a function takes, when the declaration itself is held under a named");
  ("part of a record.");
  ("Parsing a function hands back the declaration beside the name it really");
  ("answers to, because a command that writes a new function beside an old one");
  ("needs both. Every command that only wants to know what the old one takes then");
  ("digs the declaration out of that record and asks the same question of it.");
  let declaration = property_get(object, property_name);
  let names = js_function_declaration_params_names(declaration);
  return names;
}
