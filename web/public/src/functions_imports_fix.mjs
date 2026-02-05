import { functions_imports_fix_list } from "../../../love/public/src/functions_imports_fix_list.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_imports_fix() {
  const list = await functions_names();
  let v = await functions_imports_fix_list(list);
  return v;
}
