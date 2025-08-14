import { functions_combine } from "./functions_combine.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { functions_combine_name } from "./functions_combine_name.mjs";
import { list_map_name } from "./list_map_name.mjs";
import { list_join } from "./list_join.mjs";
export async function functions_combine_test(list) {
  let f_names_comma = list_map_name(list);
  let f_names_comma2 = list_join(f_names_comma, ",");
  let { combined } = await functions_combine_name(f_names_comma2);
  await function_delete_if_exists(combined);
  await functions_combine(f_names_comma);
}
