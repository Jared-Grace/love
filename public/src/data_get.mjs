import { data_all } from "./data_all.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function data_get(property_name, value_initial) {
  var { data, file_path } = await data_all("data.json");
  let value = object_property_initialize(data, property_name, value_initial);
  let v = {
    value,
    file_path,
    data,
  };
  return v;
}
