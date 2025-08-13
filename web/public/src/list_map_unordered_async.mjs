import {list_wait} from './list_wait.mjs';
import {js_unparse} from './js_unparse.mjs';
import {list_map} from './list_map.mjs';
export function list_map_unordered_async(mapped2) {
  let mapped3 = list_map(mapped2, js_unparse);
  let waited2 = list_wait(mapped3);
  return waited2;
}
