import { user_data_set } from "../../../love/public/src/user_data_set.mjs";
export async function function_current_selects_empty() {
  await user_data_set("function_current_selects", []);
}
