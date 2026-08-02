import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { equal } from "./equal.mjs";
export function js_call_callee_name_equal(call, name) {
  arguments_assert(arguments, 2);
  ("Whether a piece of code is a call to the function of a given name.");
  ("Is this the call that adds to a list, is this the one that sets a style, is");
  ("this the mark a function was tagged with, is this a call to nothing named at");
  ("all. A walk over code meets every kind of expression and has to ask that of");
  ("each one, so the name is fetched only to be held against the name looked for,");
  ("and nothing else is ever done with it.");
  let callee = js_call_callee_name_try(call);
  let named = equal(callee, name);
  return named;
}
