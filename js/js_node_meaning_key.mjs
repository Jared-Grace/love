import { js_node_meaning_key_terms } from "./js_node_meaning_key_terms.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { equal } from "./equal.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { js_code_call_commutative } from "./js_code_call_commutative.mjs";
import { js_node_writing_inside_is } from "./js_node_writing_inside_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_meaning_key(node) {
  "What a piece of a line says, written out so that two pieces saying the same thing write out the same text and two saying different things never do. Comparing two of these is how a rearranged line is judged: 9 + 7 + 4 and 4 + 9 + 7 keep one key between them, and 11 - 3 === 44 / 4 and 11 - 3 === 4 / 44 get two.";
  "Landing on the same answer was what used to be asked instead, and it is not the same question. A line that comes out false has a great many rearrangements that also come out false - 142 of them for one arithmetic question - and every one was being marked right. What a reader is asked to build is a sentence, not a number, so what is checked is the sentence.";
  "Three things are allowed to move, and they are the three that leave the sentence alone. Two sides of a sign that reads the same both ways may swap. A run of numbers added and taken away may be written in any order, since each number keeps the sign standing in front of it. A run of numbers multiplied and divided may likewise, for the same reason.";
  "Adding is only free like that between numbers, which is why the run is asked whether it is one first. Joined writing keeps the order it was joined in.";
  let plus_sign = js_operator_plus_symbol();
  let minus_sign = js_operator_minus_symbol();
  let times_sign = js_operator_asterisk_symbol();
  let over_sign = js_operator_division_symbol();
  let comma = ",";
  let empty = "";
  let open = "(";
  let close = ")";
  let type = js_node_type(node);
  let binary = list_includes(["BinaryExpression", "LogicalExpression"], type);
  if (binary) {
    let operator = property_get(node, "operator");
    let left = property_get(node, "left");
    let right = property_get(node, "right");
    let adds = list_includes([plus_sign, minus_sign], operator);
    let scales = list_includes([times_sign, over_sign], operator);
    let run = adds || scales;
    let writing = js_node_writing_inside_is(node);
    let numbers = not(writing);
    if (run && numbers) {
      let straight = plus_sign;
      let opposite = minus_sign;
      if (scales) {
        straight = times_sign;
        opposite = over_sign;
      }
      let terms = js_node_meaning_key_terms(node, straight, opposite);
      let written = list_join(terms, comma);
      let pieces = ["run", straight, open, written, close];
      let key = list_join(pieces, empty);
      return key;
    }
    let plain2 = js_node_meaning_key(left);
    let plain3 = js_node_meaning_key(right);
    let sides = [plain2, plain3];
    let commutative = js_code_binary_expression_commutative();
    let swappable = list_includes(commutative, operator);
    let arithmetic = list_includes(
      [plus_sign, minus_sign, times_sign, over_sign],
      operator,
    );
    let sortable = swappable && not(arithmetic);
    if (sortable) {
      ("A plus and a times are left out here on purpose. Between numbers they were answered above; anywhere else they are joining writing, and joined writing does not read the same both ways.");
      list_sort_text(sides);
    }
    let written_sides = list_join(sides, comma);
    let binary_pieces = [operator, open, written_sides, close];
    let binary_key = list_join(binary_pieces, empty);
    return binary_key;
  }
  let call = equal(type, "CallExpression");
  if (call) {
    let callee = property_get(node, "callee");
    let name = js_unparse(callee);
    let keys = property_list_map(node, "arguments", js_node_meaning_key);
    let commutative_calls = js_code_call_commutative();
    let swappable_call = list_includes(commutative_calls, name);
    if (swappable_call) {
      list_sort_text(keys);
    }
    let written_keys = list_join(keys, comma);
    let call_pieces = [name, open, written_keys, close];
    let call_key = list_join(call_pieces, empty);
    return call_key;
  }
  let unary = equal(type, "UnaryExpression");
  if (unary) {
    let sign = property_get(node, "operator");
    let argument = property_get(node, "argument");
    let inner = js_node_meaning_key(argument);
    let unary_pieces = [sign, open, inner, close];
    let unary_key = list_join(unary_pieces, empty);
    return unary_key;
  }
  ("Anything else stands for itself. A number, a word, a piece of writing and a name have nothing inside them that could have been written another way, so the line as it reads is already the whole of what it says.");
  let plain = js_unparse(node);
  return plain;
}
