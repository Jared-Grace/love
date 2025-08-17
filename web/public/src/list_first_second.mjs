import {list_second} from './list_second.mjs';
import {list_first} from './list_first.mjs';
export function list_first_second(split) {
  let first = null;first = list_first(split);
  let second=null;second = list_second(split);
  return {
    first,
    second
  };
}
