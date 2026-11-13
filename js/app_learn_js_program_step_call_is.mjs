import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_program_step_call_words } from "./app_learn_js_program_step_call_words.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_learn_js_program_step_call_is(kind) {
  arguments_assert(arguments, 1);
  ("whether a step of the kind given is a function called, as push and pop are, so it is chosen as Call a function and then by which function");
  let words = app_learn_js_program_step_call_words();
  let r = property_exists(words, kind);
  return r;
}
