import { text_split_comma_dot_map_unordered } from "./text_split_comma_dot_map_unordered.mjs";
import { function_aliases_delete } from "./function_aliases_delete.mjs";
import { property_get } from "./property_get.mjs";
import { assert_message } from "./assert_message.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { file_delete } from "./file_delete.mjs";
export async function function_delete(f_names_comma) {
  await text_split_comma_dot_map_unordered(f_names_comma, lambda);
  async function lambda(f_name) {
    let u = await function_unalias_exists(f_name);
    let exists = property_get(u, "exists");
    assert_message(exists, "There's no function by this name to delete. Would you like to check the name?");
    let f_path = property_get(u, "f_path");
    await file_delete(f_path);
    await function_aliases_delete(f_name);
  }
  return;
}
