import { function_delete } from "./function_delete.mjs";
import { functions_expand_all } from "./functions_expand_all.mjs";
export async function functions_expand_all_delete(f_name_expand) {
  await functions_expand_all(f_name_expand);
  await function_delete(f_name_expand);
}
