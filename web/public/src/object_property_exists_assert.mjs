import {assert} from './assert.mjs';
import {object_property_exists} from './object_property_exists.mjs';
export function object_property_exists_assert(previous, property_name) {
  let result = object_property_exists(previous, property_name);
  assert(result);
}
