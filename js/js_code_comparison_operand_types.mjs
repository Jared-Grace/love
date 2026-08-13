import { catch_null } from "./catch_null.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_comparison_operand_types(code) {
  "What kinds of thing a line compares: one word pair per comparison in it, saying what the two sides work out to be - a number against a number, a boolean against a boolean, a number against a string.";
  "It reads the two sides as they are, so a comparison standing on the left of another counts as the boolean it works out to rather than as the numbers inside it. That is the whole reason the answer is worth having: 3 < 1 !== true compares two numbers and then two booleans, and every line that says the same thing a different way compares those same two pairs.";
  "The pair is written in sorted order, and the pairs are sorted among themselves, because which side a kind sits on is not what is being asked - only which kinds met.";
  let comparisons = js_operators_comparison();
  let operators = list_map_property(comparisons, "operator");
  let tree = js_parse(code);
  let separator = " ";
  function type_of(node) {
    function run() {
      let source = js_unparse(node);
      let value = eval(source);
      let name = typeof value;
      return name;
    }
    let named = catch_null(run);
    if (named) {
      return named;
    }
    let unknown = "unknown";
    return unknown;
  }
  function collect(la) {
    function on_binary(node) {
      let operator = property_get(node, "operator");
      let compares = list_includes(operators, operator);
      if (compares) {
        let left = property_get(node, "left");
        let right = property_get(node, "right");
        let v = type_of(left);
        let v2 = type_of(right);
        let sides = [v, v2];
        list_sort_text(sides);
        let pair = list_join(sides, separator);
        la(pair);
      }
    }
    js_visit_type_node(tree, "BinaryExpression", on_binary);
  }
  let pairs = list_adder(collect);
  list_sort_text(pairs);
  return pairs;
}
