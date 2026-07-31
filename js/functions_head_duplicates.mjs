import { arguments_assert } from "./arguments_assert.mjs";
import { functions_run_duplicates_generic } from "./functions_run_duplicates_generic.mjs";
import { function_head_shape } from "./function_head_shape.mjs";
export async function functions_head_duplicates(size) {
  arguments_assert(arguments, 1);
  ("Every group of functions that begin with the same run of work, however");
  ("differently they go on.");
  ("A shared opening is the shape a missing helper leaves behind at the other end -");
  ("where a function gets hold of what it is about to work on, rather than where it");
  ("hands the result away.");
  let groups = await functions_run_duplicates_generic(
    size,
    function_head_shape,
  );
  return groups;
}
