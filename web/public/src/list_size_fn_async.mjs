import { function_import_invoke } from "../../../love/public/src/function_import_invoke.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export async function list_size_fn_async(f_name) {
  let list = await function_import_invoke(f_name);
  let size = list_size(list);
  return size;
}
