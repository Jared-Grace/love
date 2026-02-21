import { property_get } from "../../../love/public/src/property_get.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
export async function data_get(property_name, value_initial, d_path) {
  var d = await data_all(d_path);
  let file_path = property_get(d, "file_path");
  let data = property_get(d, "data");
  let value = property_initialize(data, property_name, value_initial);
  let r = {
    value,
    file_path,
    data,
  };
  return r;
}
