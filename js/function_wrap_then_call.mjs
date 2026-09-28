import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_wrap_then_call_named } from "./function_wrap_then_call_named.mjs";
export async function function_wrap_then_call(f_name, then_fn) {
  arguments_assert(arguments, 2);
  ("The wrapper named for you: the two names joined, such as list_first_data_identifiers_search, asked by the human 2026-09-28. Each is the real name behind an alias first, so the new name spells what it calls, never the shorthand used to ask for it. To choose the name yourself, the named variant takes it last.");
  let unaliased = await function_name_unalias_only(f_name);
  let then_unaliased = await function_name_unalias_only(then_fn);
  let f_name_wrapper = function_name_combine(unaliased, then_unaliased);
  let r = await function_wrap_then_call_named(f_name, then_fn, f_name_wrapper);
  return r;
}
