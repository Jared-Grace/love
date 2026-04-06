import { list_random_item_invoke_count } from "../../../love/public/src/list_random_item_invoke_count.mjs";
import { function_curryify_specify } from "../../../love/public/src/function_curryify_specify.mjs";
import { function_delete_if_exists } from "../../../love/public/src/function_delete_if_exists.mjs";
export async function sandbox() {
  await function_delete_if_exists("property_equals_not_curried_right_2");
  let r = await function_curryify_specify(
    list_random_item_invoke_count.name,
    "1,3",
  );
}
