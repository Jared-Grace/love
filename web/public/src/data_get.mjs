import {object_property_initialize} from './object_property_initialize.mjs';
import {file_read_json} from './file_read_json.mjs';
export async function data_get(property_name, value_initial) {
  const file_path = "data.json";
  let data = await file_read_json(file_path);
  let value = object_property_initialize(data, property_name, value_initial);
  return {
    value,
    file_path,
    data
  };
}
