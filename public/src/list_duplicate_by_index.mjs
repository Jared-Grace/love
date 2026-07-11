import { invoke_count_arg_curried } from "../../../love/public/src/invoke_count_arg_curried.mjs";
import { each_index_ } from "../../../love/public/src/each_index_1.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_duplicate_by_index(list) {
  'for example: [a,b,c] becomes [a,b,b,c,c,c] because a is in position 1 so there\'s 1 a; and b is in position 2 so there are 2 b\'s, etc.';
  function lambda(la) {
    let c = invoke_count_arg_curried(la);
    each_index_(list, c);
  }
  let result = list_adder(lambda);
  return result;
}
