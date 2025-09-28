import { marker } from "./marker.mjs";
import { data_save } from "./data_save.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { data_get } from "./data_get.mjs";
import { data_path } from "./data_path.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
) {
  marker("1");
  let d_path = data_path();
  var d = await data_get(property_name, value_initial, d_path);
  let { data, value: value_previous } = d;
  const value = await lambda$previous(value_previous);
  object_property_set(data, property_name, value);
  await data_save(d);
  return value;
}
