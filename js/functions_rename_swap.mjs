import { functions_names } from "./functions_names.mjs";
import { text_unique_underscore } from "./text_unique_underscore.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_rename } from "./function_rename.mjs";
export async function functions_rename_swap(f_name_a, f_name_b) {
  arguments_assert(arguments, 2);
  let f_names = await functions_names();
  let unique = text_unique_underscore(f_names, f_name_b);
  await function_rename(f_name_a, unique);
  await function_rename(f_name_b, f_name_a);
  await function_rename(unique, f_name_b);
}
