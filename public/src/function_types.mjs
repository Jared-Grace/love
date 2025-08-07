import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";

export async function function_types(f_name) {
  let parsed = await function_parse(f_name);
  return list_adder_unique((la) => {
    js_visit_nodes(parsed, (node) => {
      la(js_node_type(node));
    });
  });
}
