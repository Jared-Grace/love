import { js_block_child_graph } from "./js_block_child_graph.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function js_block_child_graph_unparse(ast) {
  let edges = js_block_child_graph(ast);
  if (false) {
    function a() {}
  }
  async function lambda(edge) {
    let waited = await list_map_unordered_async(edge, js_unparse);
    return waited;
  }
  let mapped = await list_map_unordered_async(edges, lambda);
  return mapped;
}
