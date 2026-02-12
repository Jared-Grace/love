import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export async function js_list_type_each_async(ast, type, lambda$item) {
  let vs = js_list_type(ast, type);
  await each_async(vs, lambda$item);
}
