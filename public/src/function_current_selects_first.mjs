import { list_first } from "../../../love/public/src/list_first.mjs";
import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
export async function function_current_selects_first() {
  let ids = await user_data_get("function_current_selects");
  let first_id = list_first(ids);
  return first_id;
}
