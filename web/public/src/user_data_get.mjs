import { property_get } from "../../../love/public/src/property_get.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
export async function user_data_get(property_name) {
  let f_path = user_data_path();
  const initial = null;
  let v = await data_get(property_name, initial, f_path);
  let value = property_get(v, "value");
  return value;
}
