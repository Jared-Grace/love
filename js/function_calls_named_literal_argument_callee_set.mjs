import { arguments_assert } from "./arguments_assert.mjs";
import { js_calls_named_literal_argument_callee_set } from "./js_calls_named_literal_argument_callee_set.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
export async function function_calls_named_literal_argument_callee_set(
  f_name,
  f_name_before,
  literal,
  f_name_after,
) {
  "$plain literal";
  arguments_assert(arguments, 4);
  ("Moves one function's calls off a helper it was handing a written-out word and onto the helper that already knows that word, in the file that makes them.");
  ("Imports are settled by the wrapper around the change: the helper being moved to is brought in, and the one being left is dropped if this file has no other call reaching it. A change that writes a call from a name and leaves the import unwritten reads perfectly and dies when it runs.");
  ("Calls in the same file that hand the old helper something else are untouched, so a file may well go on importing both. That is not a leftover; it is a file that genuinely asks two different questions.");
  async function lambda(ast) {
    await js_calls_named_literal_argument_callee_set(
      ast,
      f_name_before,
      literal,
      f_name_after,
    );
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
