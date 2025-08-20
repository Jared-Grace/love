import { data_save } from "./data_save.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { data_get } from "./data_get.mjs";
import { log } from "./log.mjs";
export async function data_transform(
  property_name,
  value_initial,
  lambda$previous,
) {
  var d = await data_get(property_name, value_initial);
  let { data, value: value_previous } = d;
  const value = await lambda$previous(value_previous);
  object_property_set(data, property_name, value);
  log({
    value,
  });
  await data_save(d);
  return value;
}
