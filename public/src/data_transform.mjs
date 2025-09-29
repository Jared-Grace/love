import { marker } from "../../../love/public/src/marker.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
  d_path,
) {
  marker("1");
  var d = await data_get(property_name, value_initial, d_path);
  let { data, value: value_previous } = d;
  const value = await lambda$previous(value_previous);
  object_property_set(data, property_name, value);
  await data_save(d);
  return value;
}
