import { property_get } from "./property_get.mjs";
import { data_save } from "./data_save.mjs";
import { property_set } from "./property_set.mjs";
import { data_get } from "./data_get.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
  d_path,
) {
  var d = await data_get(property_name, value_initial, d_path);
  let value_previous = property_get(d, "value");
  let data = property_get(d, "data");
  let value = await lambda$previous(value_previous);
  property_set(data, property_name, value);
  await data_save(d);
  return value;
}
