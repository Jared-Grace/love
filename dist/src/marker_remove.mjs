import { function_transform_marker_all } from "../../../love/public/src/function_transform_marker_all.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export async function marker_remove() {
  let f_name = await function_current_get();
  await function_transform_marker_all(f_name, lambda);
  function lambda(a) {
    let { stack2, stack1 } = a;
    list_remove(stack2, stack1);
  }
}
