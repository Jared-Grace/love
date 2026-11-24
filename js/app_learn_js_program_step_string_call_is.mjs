import { property_list_includes } from "./property_list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_step_call_types } from "./app_learn_js_program_step_call_types.mjs";
export function app_learn_js_program_step_string_call_is(kind) {
  arguments_assert(arguments, 1);
  ("whether a step of the kind given is a function called on a string, as toUpperCase is: it gives back a new value and changes nothing it is called on");
  let types = app_learn_js_program_step_call_types();
  let r = property_list_includes(types, "A string", kind);
  return r;
}
