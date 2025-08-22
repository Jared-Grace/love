import { list_join_comma } from "./list_join_comma.mjs";
import { functions_combine } from "./functions_combine.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { functions_combine_name } from "./functions_combine_name.mjs";
import { list_map_name } from "./list_map_name.mjs";
export async function functions_combine_test(list) {
  let names = list_map_name(list);
  let f_names_comma = list_join_comma(names);
  let { combined } = await functions_combine_name(f_names_comma);
  await function_delete_if_exists(combined);
  await functions_combine(f_names_comma);
}
