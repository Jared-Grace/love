import {js_unparse} from './js_unparse.mjs';
import {list_get} from './list_get.mjs';
import {list_adder_async} from './list_adder_async.mjs';
import {log} from './log.mjs';
import {list_insert} from './list_insert.mjs';
import {list_remove} from './list_remove.mjs';
import {function_transform_marker} from './function_transform_marker.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {list_index_of} from './list_index_of.mjs';
export async function marker_next() {
  let f_name = await data_function_current_get();
  return list_adder_async(async la => {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let {stack2, stack1} = a;
      let index = list_index_of(stack2, stack1);
      let index_new = index + 1;
      let next = list_get(stack2, index_new);
      la(js_unparse(next));
    }
  });
}
