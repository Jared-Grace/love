import {assert} from './assert.mjs';
import {list_is} from './list_is.mjs';
export function list_is_assert(stack1_v_new) {
  let result = list_is(stack1_v_new);
  assert(result);
}
