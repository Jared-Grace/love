import {function_transform_marker} from './function_transform_marker.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {list_remove} from './list_remove.mjs';
export async function marker_remove() {
  let f_name = await data_function_current_get();
  await function_transform_marker(f_name, lambda);
  function lambda(a) {
    let {stack2, stack1} = a;
    list_remove(stack2, stack1);
  }
}
