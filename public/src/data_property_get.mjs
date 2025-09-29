import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_property_get(property_name, d_path) {
  marker("1");
  let { data } = await data_get(property_name, null, d_path);
  let value = object_property_get(data, property_name);
  return value;
}
