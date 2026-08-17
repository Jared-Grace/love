import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_token_select_variations_set_sides } from "./app_code_lesson_quiz_token_select_variations_set_sides.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { each } from "./each.mjs";
import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { app_code_lesson_quiz_token_select_variations_set_args } from "./app_code_lesson_quiz_token_select_variations_set_args.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_quiz_token_select_variations_collect(la, tree) {
  arguments_assert(arguments, 2);
  ("gather one orderable per commutative node - each carries its list of ordering functions and a restore to its original arrangement");
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
      function make_ordering(perm) {
        function ordering() {
          app_code_lesson_quiz_token_select_variations_set_args(
            perm,
            node,
            key,
          );
        }
        return ordering;
      }
      let orderings = list_map(perms, make_ordering);
      function restore() {
        app_code_lesson_quiz_token_select_variations_set_args(
          original,
          node,
          key,
        );
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
