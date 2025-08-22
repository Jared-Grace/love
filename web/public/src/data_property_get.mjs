import { object_property_get } from "./object_property_get.mjs";
import { data_get } from "./data_get.mjs";
export async function data_property_get(property_name) {
  var d = await data_get(property_name, null);
  let { data } = d;
  let value = object_property_get(data, property_name);
  return value;
}
