import { user_data_get } from "../../../love/public/src/user_data_get.mjs";
export async function function_current_selects() {
  let r = await user_data_get("function_current_selects");
  return r;
}
