import {object_property_get} from './object_property_get.mjs';
import {data_save} from './data_save.mjs';
import {object_property_set} from './object_property_set.mjs';
import {data_get} from './data_get.mjs';
import { log } from './log.mjs';
export async function data_transform(property_name, value_initial, value_get) {
  var d = await data_get(property_name, value_initial);
  let {data, value} = d;
  object_property_set(data, property_name, value_get(value));
  log(d)
  await data_save(d);
}
