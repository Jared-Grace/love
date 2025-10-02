import { functions_imports_fix_list } from "../../../karate_code/public/src/functions_imports_fix_list.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_imports_fix() {
  marker("1");
  const list = await functions_names();
  let v = await functions_imports_fix_list(list);
  return v;
}
