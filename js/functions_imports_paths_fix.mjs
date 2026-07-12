import { functions_imports_paths_fix_list } from "./functions_imports_paths_fix_list.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_imports_paths_fix() {
  let list = await functions_names();
  let v = await functions_imports_paths_fix_list(list);
  return v;
}
