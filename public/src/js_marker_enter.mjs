import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { log } from "./log.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_types_function_includes } from "./js_types_function_includes.mjs";
import { js_types_function } from "./js_types_function.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_skip } from "./list_skip.mjs";
import { function_types } from "./function_types.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function js_marker_enter(ast) {
  marker("1");
  async function lambda(a) {
    let { stack2, stack1 } = a;
    let index_next = list_index_of_next(stack2, stack1);
    let skipped = list_skip(stack2, index_next);
    function lambda2(item) {
      let nt = js_node_type(item);
      log(nt);
      let includes = js_types_function_includes(nt);
      return includes;
    }
    let result = list_filter(stack2, lambda2);
    log(result);
    let message = list_map_unordered_async(stack2, js_unparse);
    log(message);
    log(await js_unparse(stack1));
  }
  let v = await function_transform_marker_current(lambda);
}
