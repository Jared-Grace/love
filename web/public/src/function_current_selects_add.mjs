import { function_current_selects_on_previous } from "../../../love/public/src/function_current_selects_on_previous.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function function_current_selects_add(item_to_add, on_previous) {
  async function lambda(previous) {
    list_add(previous, item_to_add);
    on_previous(previous);
    return previous;
  }
  let r = await function_current_selects_on_previous(lambda);
  return r;
}
