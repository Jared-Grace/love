import { function_current_selects_add } from "../../../love/public/src/function_current_selects_add.mjs";
import { list_remove_curried_right } from "../../../love/public/src/list_remove_curried_right.mjs";
export async function function_current_selects_replace(
  item_to_remove,
  item_to_add,
) {
  let r = list_remove_curried_right(item_to_remove);
  let r3 = await function_current_selects_add([item_to_add], r);
  return r3;
}
