import { arguments_assert } from "./arguments_assert.mjs";
import { functions_run_duplicates_generic } from "./functions_run_duplicates_generic.mjs";
import { function_tail_shape } from "./function_tail_shape.mjs";
export async function functions_tail_duplicates(size) {
  arguments_assert(arguments, 1);
  ("Every group of functions that end in the same run of work, however differently");
  ("they begin.");
  ("A shared ending is the shape a missing helper leaves behind, because the ending");
  ("is where a function hands what it made to something general.");
  let groups = await functions_run_duplicates_generic(
    size,
    function_tail_shape,
  );
  return groups;
}
