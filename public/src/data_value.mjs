import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
export async function data_value(property_name, d_path) {
  marker("1");
  var { data } = await data_all(d_path);
  let value = object_property_get(data, property_name);
  return value;
}
