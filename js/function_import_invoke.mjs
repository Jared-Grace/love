import { function_import } from "./function_import.mjs";
export async function function_import_invoke(f_name) {
  let imported_fn = await function_import(f_name);
  let result = imported_fn();
  return result;
}
