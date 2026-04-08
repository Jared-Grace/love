import { data_get } from "../../../love/public/src/data_get.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
export async function user_data_get(property_name) {
  let f_path = user_data_path();
  let v = await data_get(property_name, null, f_path);
  return v;
}
