import { user_data_get } from "./user_data_get.mjs";
export async function function_current_selects() {
  let s = await user_data_get("function_current_selects");
  return s;
}
