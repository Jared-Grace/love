import { data_get_value } from "../../../love/public/src/data_get_value.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
export async function user_data_get(property_name) {
  let f_path = user_data_path();
  let value = await data_get_value(property_name, null, f_path);
  return value;
}
