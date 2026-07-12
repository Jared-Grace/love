import { data_set } from "./data_set.mjs";
import { user_data_path } from "./user_data_path.mjs";
export async function user_data_set_fn(property_name, lambda) {
  let f_path = user_data_path();
  await data_set(lambda, property_name, f_path);
}
