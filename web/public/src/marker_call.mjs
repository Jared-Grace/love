import {js_unparse} from './js_unparse.mjs';
import {marker_next_get} from './marker_next_get.mjs';
import {function_transform_marker} from './function_transform_marker.mjs';
import {list_adder_async} from './list_adder_async.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import { marker_next_index } from './marker_next_index.mjs';
export async function marker_call() {
  let f_name = await data_function_current_get();
  return list_adder_async(async la => {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let index = marker_next_index(a);
      
      la(js_unparse(next));
    }
  });
}
