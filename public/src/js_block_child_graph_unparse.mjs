import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { js_types_function } from "./js_types_function.mjs";
import { exit } from "./exit.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_get } from "./list_get.mjs";
import { assert } from "./assert.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_is } from "./list_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { log } from "./log.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { each } from "./each.mjs";
import { js_visitors } from "./js_visitors.mjs";
import { marker } from "./marker.mjs";
export async function js_block_child_graph_unparse(ast) {
  let edges = js_block_child_graph_unparse(ast);
  async function lambda(edge) {
    let waited = await list_map_unordered_async(edge, js_unparse);
    return waited;
  }
  let mapped = await list_map_unordered_async(list, lambda);
  return mapped;
}
