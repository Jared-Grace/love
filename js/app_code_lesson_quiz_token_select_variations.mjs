import { app_code_lesson_quiz_token_select_variations_set_sides } from "./app_code_lesson_quiz_token_select_variations_set_sides.mjs";
import { app_code_lesson_quiz_token_select_variations_generate_all } from "./app_code_lesson_quiz_token_select_variations_generate_all.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { app_code_lesson_quiz_token_select_value_variations } from "./app_code_lesson_quiz_token_select_value_variations.mjs";
import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_copy } from "./list_copy.mjs";
import { property_set } from "./property_set.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { js_parse } from "./js_parse.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  "every accepted token ordering for the unscramble. A commutative operator (+ * === !== || &&) can keep or swap its two sides; a commutative call (Math.min / Math.max) can take its arguments in ANY order - all permutations. The accepted orderings are the cartesian product of every such node's orderings; enumerate them, restoring each node to its original after its own loop so the tree is left unchanged.";
  let expression_is = js_expression_is(code);
  let tree = js_parse(code);
  function collect(la) {
    "gather one orderable per commutative node - each carries its list of ordering functions and a restore to its original arrangement";
    let commutatives = js_code_binary_expression_commutative();
    function on_binary(node) {
      let includes = property_in_list(node, "operator", commutatives);
      if (includes) {
        let left = property_get(node, "left");
        let right = property_get(node, "right");
        function keep() {
          app_code_lesson_quiz_token_select_variations_set_sides(
            left,
            right,
            node,
          );
        }
        function swap() {
          app_code_lesson_quiz_token_select_variations_set_sides(
            right,
            left,
            node,
          );
        }
        let orderings = [keep, swap];
        let orderable = {
          orderings,
          restore: keep,
        };
        la(orderable);
      }
    }
    let swappable_types = ["BinaryExpression", "LogicalExpression"];
    function visit_binary(type) {
      js_visit_type_node(tree, type, on_binary);
    }
    each(swappable_types, visit_binary);
    let commutative_calls = js_code_call_commutative();
    function on_call(node) {
      let callee = property_get(node, "callee");
      let name = js_unparse(callee);
      let is_commutative = list_includes(commutative_calls, name);
      if (is_commutative) {
        let args = js_call_arguments_get(node);
        let original = list_copy(args);
        let perms = list_permutations(original);
        let key = js_special_arguments();
        function set_args(perm) {
          property_set(node, key, perm);
        }
        function make_ordering(perm) {
          function ordering() {
            set_args(perm);
          }
          return ordering;
        }
        let orderings = list_map(perms, make_ordering);
        function restore() {
          set_args(original);
        }
        let orderable = {
          orderings,
          restore,
        };
        la(orderable);
      }
    }
    js_visit_type_node(tree, "CallExpression", on_call);
  }
  let orderable_nodes = list_adder(collect);
  let value_codes = app_code_lesson_quiz_token_select_value_variations(code);
  function generate_all_with_values(la) {
    "the commutative-swap orderings, plus every same-tiles same-value rearrangement, into one deduplicated pool";
    app_code_lesson_quiz_token_select_variations_generate_all(
      la,
      tree,
      orderable_nodes,
    );
    each(value_codes, la);
  }
  let codes = list_adder_unique(generate_all_with_values);
  let variations = list_map(codes, app_code_quiz_tokens);
  if (expression_is) {
    function trim_semicolon(item) {
      let expected_last = ";";
      let has_semicolon = list_last_is(item, expected_last);
      if (has_semicolon) {
        list_remove_last(item);
      }
    }
    each(variations, trim_semicolon);
  }
  return variations;
}
