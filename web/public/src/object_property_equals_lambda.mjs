import {object_property_get} from './object_property_get.mjs';
export function object_property_equals_lambda(property_name, property_value) {
  return item => object_property_get(item, property_name) === property_value;
}
