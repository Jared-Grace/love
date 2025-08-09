import {data_save} from './data_save.mjs';
import {object_property_set} from './object_property_set.mjs';
import {data_get} from './data_get.mjs';
export async function data_transform(property_name, value) {
  var d = await data_get(property_name, null);
  let {data} = d;
  object_property_set(data, property_name, value);
  await data_save(d);
}
