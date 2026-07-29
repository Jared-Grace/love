import { arguments_assert } from "./arguments_assert.mjs";
import { function_params_count } from "./function_params_count.mjs";
import { js_calls_named_sized_callee_set } from "./js_calls_named_sized_callee_set.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
export async function function_calls_callee_set(
  f_name,
  f_name_before,
  f_name_after,
) {
  arguments_assert(arguments, 3);
  ("Moves one function's calls from one helper to another, in the file that makes");
  ("them.");
  ("How many things to look for is read off the function being moved to rather");
  ("than asked for, so the number cannot be got wrong and the command cannot be");
  ("pointed at calls that would not fit. The calls that already suit the old helper");
  ("hand over a different number and are passed over untouched.");
  ("Imports are settled by the wrapper: the new name is brought in, and the old one");
  ("is dropped if this was the last call reaching it.");
  let count = await function_params_count(f_name_after);
  async function lambda(ast) {
    await js_calls_named_sized_callee_set(
      ast,
      f_name_before,
      f_name_after,
      count,
    );
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
