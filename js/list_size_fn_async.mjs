import { function_import_invoke } from "./function_import_invoke.mjs";
import { list_size } from "./list_size.mjs";
export async function list_size_fn_async(f_name) {
  let list = await function_import_invoke(f_name);
  let size = list_size(list);
  return size;
}
