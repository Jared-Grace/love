import {number_is} from './number_is.mjs';
import {assert} from './assert.mjs';
export function list_insert(list, index, value) {
  assert(number_is(index));
  list.splice(index, 0, value);
}
