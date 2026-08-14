import { app_code_lesson_quiz_token_select_variations_set_args } from "./app_code_lesson_quiz_token_select_variations_set_args.mjs";
import { app_code_lesson_quiz_token_select_variations_set_sides } from "./app_code_lesson_quiz_token_select_variations_set_sides.mjs";
import { app_code_lesson_quiz_token_select_variations_generate_all } from "./app_code_lesson_quiz_token_select_variations_generate_all.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { app_code_lesson_quiz_token_select_meaning_variations } from "./app_code_lesson_quiz_token_select_meaning_variations.mjs";
import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_code_same_meaning_is } from "./js_code_same_meaning_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_copy } from "./list_copy.mjs";
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
  let orderable_nodes = list_adder(collect);
  let value_codes = app_code_lesson_quiz_token_select_meaning_variations(code);
  function generate_all_with_values(la) {
    "the question's own wording, then the commutative-swap orderings, plus every same-tiles same-value rearrangement, into one deduplicated pool";
    "The wording the question was asked in goes in first and by hand, because neither of the two halves below is guaranteed to produce it. The swap half re-prints the line from its tree, and printing drops a bracket the line does not need - so (3 === 5) === (5 === 3) came back as 3 === 5 === (5 === 3), and the learner who copied the line the lesson had just taught them pressed an opening bracket and was told they were wrong. The same-tiles half was no help either: it declines above a small tile count, and that line has eleven.";
    "Nothing can be lost by putting it there. It is the answer the question was written to have, so it is right by construction, and everything else in the pool is only ever another way of saying it.";
    la(code);
    app_code_lesson_quiz_token_select_variations_generate_all(
      la,
      tree,
      orderable_nodes,
    );
    each(value_codes, la);
  }
  let codes = list_adder_unique(generate_all_with_values);
  ('Swapping the two sides of a sign that reads both ways is not always safe, because a plus is not always a sum. "He" + " gave" swapped over is a different sentence, and it was being accepted. So every ordering gathered above is asked once more whether it still says what the question says, and the ones that no longer do are dropped.');
  ("Only lines that stand for a value are asked. Anything else - a whole statement, say - has no sides to weigh against each other, and asking would throw away the very ordering it was written in.");
  function said_alike_is(candidate) {
    let said_alike = js_code_same_meaning_is(code, candidate);
    return said_alike;
  }
  let said = codes;
  if (expression_is) {
    said = list_filter(codes, said_alike_is);
  }
  let variations = list_map(said, app_code_quiz_tokens);
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
