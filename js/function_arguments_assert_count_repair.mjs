import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_function_arguments_assert_count_repair } from "./js_function_arguments_assert_count_repair.mjs";
export async function function_arguments_assert_count_repair(f_name) {
  "Makes one named function's argument check say the number of names that function actually takes.";
  arguments_assert(arguments, 1);
  ("The work itself was already written and had no door onto the command line: the only thing reaching it was the command that changes a parameter list, so a parameter added any other way left the check saying the old number with no way to put it right by name.");
  ("A function with no check is left with none. Whether one belongs there is a separate question with its own command, and answering it here would put a check into every function anybody ever repaired.");
  await function_transform(f_name, js_function_arguments_assert_count_repair);
}
