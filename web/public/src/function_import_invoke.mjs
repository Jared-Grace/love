import { function_import } from "../../../love/public/src/function_import.mjs";
export async function function_import_invoke(f_name) {
  let imported_fn = await function_import(f_name);
  let file_path = imported_fn();
  return file_path;
}
