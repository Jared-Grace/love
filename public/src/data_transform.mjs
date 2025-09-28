import { object_property_set } from "./object_property_set.mjs";
import { data_get } from "./data_get.mjs";
import { data_path } from "./data_path.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
) {
  let d_path = data_path();
  let { data, value: value_previous } = await data_get(
    property_name,
    value_initial,
    d_path,
  );
  const value = await lambda$previous(value_previous);
  object_property_set(data, property_name, value);
  return value;
}
