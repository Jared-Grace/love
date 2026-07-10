import { log } from "../../../love/public/src/log.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_remove_last_equal } from "../../../love/public/src/list_remove_last_equal.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_type_node } from "../../../love/public/src/js_visit_type_node.mjs";
import { property_swap } from "../../../love/public/src/property_swap.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_code_binary_expression_commutative } from "../../../love/public/src/js_code_binary_expression_commutative.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  let expression = js_parse_expression_try(code);
  log(app_code_lesson_quiz_token_select_variations.name, {
    expression,
  });
  let nn = null_not_is(expression);
  let ast = js_parse(code);
  function lambda4(la) {
    let commutatives = js_code_binary_expression_commutative();
    function lambda2(node) {
      let operator = property_get(node, "operator");
      let includes = list_includes(commutatives, operator);
      if (includes) {
        function swap() {
          property_swap(node, "left", "right");
        }
        la(swap);
      }
    }
    js_visit_type_node(ast, "BinaryExpression", lambda2);
  }
  let variation_fns = list_adder(lambda4);
  function lambda5(la) {
    let code_without_variation = js_unparse(ast);
    la(code_without_variation);
    let ne = list_empty_not_is(variation_fns);
    if (ne) {
      let variation = list_single(variation_fns);
      variation();
      let code_with_variation = js_unparse(ast);
      la(code_with_variation);
    }
  }
  let codes = list_adder_unique(lambda5);
  let variations = list_map(codes, js_tokenizer_normalized);
  function lambda6(item) {
    const expected_last = ";";
    list_remove_last_equal(item, expected_last);
  }
  each(variations, lambda6);
  return variations;
}
