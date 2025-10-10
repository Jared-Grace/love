import { js_block_child_graph } from "../../../love/public/src/js_block_child_graph.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function js_block_child_graph_unparse(ast) {
  marker("1");
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
