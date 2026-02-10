import { property_get } from "../../../love/public/src/property_get.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
  d_path,
) {
  var d = await data_get(property_name, value_initial, d_path);
  let value_previous = property_get(d, "value");
  let data = property_get(d, "data");
  const value = await lambda$previous(value_previous);
  property_set(data, property_name, value);
  await data_save(d);
  return value;
}
