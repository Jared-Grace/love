import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_type_first(f_name, type) {
  let parsed = await function_parse(f_name);
  let list = list_adder((la) => {
    js_visit_nodes(parsed, (node) => {
      if (js_node_type(node) === type) la(node);
    });
  });
  return list_first(list);
}
