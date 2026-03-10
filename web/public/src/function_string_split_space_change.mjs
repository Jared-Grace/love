import { log } from "../../../love/public/src/log.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { change_if_equal_curried_right_2 } from "../../../love/public/src/change_if_equal_curried_right_2.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_string_split_space_change(f_name, from, to) {
  async function lambda(ast) {
    let literal = js_list_type_nodes(ast, "Literal");
    function lambda2(literal) {
      function lambda3(value) {
        let split = text_split_space(value);
        let r = change_if_equal_curried_right_2(from, to);
        let mapped = list_map(split, r);
        let joined = list_join_space(mapped);
        log({
          joined,
        });
        return joined;
      }
      let value_after = js_literal_map(literal, lambda3);
    }
    each(literal, lambda2);
  }
  let output = await function_transform(f_name, lambda);
}
