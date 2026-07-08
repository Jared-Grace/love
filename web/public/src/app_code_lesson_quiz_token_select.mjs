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
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_tokenizer } from "../../../love/public/src/js_tokenizer.mjs";
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
  let tokens = js_tokenizer(code);
  let mapped = list_map_property(tokens, "value");
  let mapped2 = list_map(mapped, text_to);
  list_shuffle(mapped2);
  function lambda(token) {
    function lambda3() {}
    let b = app_replace_button(parent, token, lambda3);
    html_style_code_dark(b);
  }
  each(mapped2, lambda);
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
  function lambda5(la2) {}
  let list = list_adder(lambda5);
  let code2 = js_unparse(ast2);
  let only = list_single(variations);
  only();
}
