import {object_property_initialize} from './object_property_initialize.mjs';
import {object_property_exists} from "./object_property_exists.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {file_read_json} from "./file_read_json.mjs";
export async function function_alias_add_generic(alias) {
    const property_name = "aliases";
    const value_initial = {};
  var { value:aliases, file_path, data } = await data_get(property_name, value_initial);
  const exists = object_property_exists(aliases, alias);
  let unaliased = null;
  if (exists) {
    unaliased = object_property_get(aliases, alias);
  }
  return {
    exists,
    aliases,
    file_path,
    data,
    unaliased
  };
}
async function data_get(property_name, value_initial) {
    const file_path = "data.json";
    let data = await file_read_json(file_path);
    let value = object_property_initialize(data, property_name, value_initial);
    return { value, file_path, data };
}

