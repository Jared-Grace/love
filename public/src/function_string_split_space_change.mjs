import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_string_split_space_change(f_name, from, to) {
  async function lambda(ast) {
    let nodes = js_list_type_nodes(ast, "Literal");
    let filtered = list_filter_property(nodes, 'value', from);
    log({
      filtered,
    });
  }
  let output = await function_transform(f_name, lambda);
}
