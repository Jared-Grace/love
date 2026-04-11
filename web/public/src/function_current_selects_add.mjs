import { function_current_selects_on_previous } from "../../../love/public/src/function_current_selects_on_previous.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export async function function_current_selects_add(items_to_add, on_previous) {
  async function on_previous_inner(previous) {
    list_add_multiple(previous, items_to_add);
    on_previous(previous);
    return previous;
  }
  let r = await function_current_selects_on_previous(on_previous_inner);
  return r;
}
