import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_first } from "./list_first.mjs";
export async function function_type_first(f_name, type) {
  let ast = await function_parse(f_name);
  let list = list_adder((la) => {
    js_visit_nodes(ast, (node) => {
      if (js_node_type(node) === type) {
        la(node);
      }
    });
  });
  return list_first(list);
}
