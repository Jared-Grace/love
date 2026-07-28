import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { each } from "./each.mjs";
import { list_remove_last_equal } from "./list_remove_last_equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { property_swap } from "./property_swap.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { js_parse } from "./js_parse.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  let expression_is = js_expression_is(code);
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
    let swappable_types = ["BinaryExpression", "LogicalExpression"];
    function visit_type(type) {
      js_visit_type_node(ast, type, lambda2);
    }
    each(swappable_types, visit_type);
    function lambda_call(node) {
      "Math.min / Math.max are commutative in their two arguments too, so add a swap of those arguments - the learner may build Math.min(4, 8) or Math.min(8, 4) and both are right";
      let callee = property_get(node, "callee");
      let name = js_unparse(callee);
      let commutative_calls = js_code_call_commutative();
      let is_commutative = list_includes(commutative_calls, name);
      if (is_commutative) {
        let args = js_call_arguments_get(node);
        let count = list_size(args);
        let two = equal(count, 2);
        if (two) {
          function swap() {
            list_swap_at(args, 0, 1);
          }
          la(swap);
        }
      }
    }
    js_visit_type_node(ast, "CallExpression", lambda_call);
  }
  let variation_fns = list_adder(lambda4);
  function lambda5(la) {
    "every commutative node can independently keep or swap its two sides, so the acceptable orderings are ALL combinations of the swaps (2^n, not just one); enumerate them by recursively trying each swap off then on, and since each swap is its own inverse the ast is left back at its original state; the unique adder folds identical results (e.g. 2 * 2 * 2 where swapping changes nothing)";
    function generate(swaps) {
      let none_left = list_empty_is(swaps);
      if (none_left) {
        let code_variation = js_unparse(ast);
        la(code_variation);
      } else {
        let split = list_first_remaining(swaps);
        let swap = property_get(split, "first");
        let remaining = property_get(split, "remaining");
        generate(remaining);
        swap();
        generate(remaining);
        swap();
      }
    }
    generate(variation_fns);
  }
  let codes = list_adder_unique(lambda5);
  let variations = list_map(codes, app_code_quiz_tokens);
  if (expression_is) {
    function lambda6(item) {
      let expected_last = ";";
      list_remove_last_equal(item, expected_last);
    }
    each(variations, lambda6);
  }
  return variations;
}
