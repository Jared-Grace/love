import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_property_get(d_path, property_name) {
  marker("1");
  let v = await data_get(property_name, null, d_path);
  let data = object_property_get(v, "data");
  let value = object_property_get(data, property_name);
  return value;
}
