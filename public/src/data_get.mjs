import { marker } from "../../../love/public/src/marker.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
export async function data_get(property_name, value_initial, d_path) {
  marker("1");
  var { data, file_path } = await data_all(d_path);
  let value = object_property_initialize(data, property_name, value_initial);
  let v = {
    value,
    file_path,
    data,
  };
  return v;
}
