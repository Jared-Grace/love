import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { list_chunk } from "../../../love/public/src/list_chunk.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { change_if_equal_curried_right_2 } from "../../../love/public/src/change_if_equal_curried_right_2.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_string_split_space_change(f_name, list) {
  arguments_assert(arguments, 2);
  let split3 = text_split_comma(t);
  let split2 = text_split_comma(list);
  let chunks = list_chunk(split2, 2);
  async function lambda(ast) {
    function lambda4(chunk) {
      let result = list_first_second(chunk);
      let from = property_get(result, "first");
      let to = property_get(result, "second");
      let literal = js_list_type_nodes(ast, "Literal");
      function lambda2(literal) {
        function lambda3(value) {
          let split = text_split_space(value);
          let r = change_if_equal_curried_right_2(from, to);
          let mapped = list_map(split, r);
          let joined = list_join_space(mapped);
          return joined;
        }
        let value_after = js_literal_map(literal, lambda3);
        object_replace(literal, value_after);
      }
      each(literal, lambda2);
    }
    each(chunks, lambda4);
  }
  let output = await function_transform(f_name, lambda);
}
