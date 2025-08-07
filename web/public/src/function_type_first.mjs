import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_type_first(f_name) {
  let parsed = await function_parse(f_name);
  list_adder((la) => {
    js_visit_nodes(parsed, (node) => {
      la(node);
    });
  });
}
