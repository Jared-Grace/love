import {object_property_get} from './object_property_get.mjs';
import {data_get} from './data_get.mjs';
export async function data_function_current_get() {
  const property_name = "function_current";
  var d = await data_get(property_name, null);
  let {data} = d;
  let f_name = object_property_get(data, property_name);
  return f_name;
}
