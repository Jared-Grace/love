import { object_property_get } from "./object_property_get.mjs";
import { data_all } from "./data_all.mjs";
export async function data_value(property_name) {
  var { data } = await data_all();
  let value = object_property_get(data, property_name);
  return value;
}
