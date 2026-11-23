import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_step_call_types } from "./app_learn_js_program_step_call_types.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_learn_js_program_step_call_type(method) {
  arguments_assert(arguments, 1);
  ("the words of the button saying what kind of value the named function is called on: An array for push, A string for toUpperCase");
  let types = app_learn_js_program_step_call_types();
  for (let type of properties_get(types)) {
    let methods = property_get(types, type);
    if (list_includes(methods, method)) {
      return type;
    }
  }
  throw new Error("no kind of value lists the function " + method);
}
