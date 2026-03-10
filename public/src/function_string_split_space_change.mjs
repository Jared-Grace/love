import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_string_split_space_change(f_name, from, to) {
  async function lambda(ast) {
    let nodes = js_list_type_nodes(ast, "Literal");
    function lambda2(item) {
      function lambda3(value) {}
      let value_after = js_literal_map(literal, lambda3);
    }
    each(list, lambda2);
  }
  let output = await function_transform(f_name, lambda);
}
