import { function_current_selects } from "./function_current_selects.mjs";
import { list_first } from "./list_first.mjs";
export async function function_current_selects_first() {
  let ids = await function_current_selects();
  let first_id = list_first(ids);
  return first_id;
}
