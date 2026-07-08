import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { js_parse_expression_try } from "../../../love/public/src/js_parse_expression_try.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_swap } from "../../../love/public/src/property_swap.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_visit_type_node } from "../../../love/public/src/js_visit_type_node.mjs";
import { js_code_binary_expression_commutative } from "../../../love/public/src/js_code_binary_expression_commutative.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_quiz_token_select(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let code = property_get(qa, answer_property);
  let normalized = js_tokenizer_normalized(code);
  list_shuffle(normalized);
  function lambda(token) {
    function lambda3() {}
    let b = app_replace_button(parent, token, lambda3);
    html_style_code_dark(b);
  }
  each(normalized, lambda);
  let expression = js_parse_expression_try(code);
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
  let variations = list_adder(lambda4);
  function lambda5(la) {
    let code_without_variation = js_unparse(ast);
    la(code_without_variation);
    let variation = list_single(variations);
    variation();
    let code_with_variation = js_unparse(ast);
    la(code_with_variation);
  }
  let codes = list_adder_unique(lambda5);
  let mapped2 = list_map(list2, js_tokenizer_normalized);
  function lambda6(item) {
    let popped = list_remove_last(list3);
  }
  let mapped = list_map(list, lambda6);
  let mapped3 = list_map(codes, js_parse_expression);
  log(app_code_lesson_quiz_token_select.name, {
    mapped3,
    ast,
  });
}
