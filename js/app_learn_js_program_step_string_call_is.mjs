import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_step_call_types } from "./app_learn_js_program_step_call_types.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_learn_js_program_step_string_call_is(kind) {
  arguments_assert(arguments, 1);
  ("whether a step of the kind given is a function called on a string, as toUpperCase is: it gives back a new value and changes nothing it is called on");
  let types = app_learn_js_program_step_call_types();
  let strings = property_get(types, "A string");
  let r = list_includes(strings, kind);
  return r;
}
