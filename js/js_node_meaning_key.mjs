import { js_equality_operators } from "./js_equality_operators.mjs";
import { js_node_meaning_key_agreement } from "./js_node_meaning_key_agreement.mjs";
import { js_operator_adding_symbols } from "./js_operator_adding_symbols.mjs";
import { js_operator_scaling_symbols } from "./js_operator_scaling_symbols.mjs";
import { js_node_meaning_key_run } from "./js_node_meaning_key_run.mjs";
import { js_node_meaning_key_sides } from "./js_node_meaning_key_sides.mjs";
import { js_node_meaning_key_call } from "./js_node_meaning_key_call.mjs";
import { equal } from "./equal.mjs";
import { js_node_writing_inside_is } from "./js_node_writing_inside_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_meaning_key(node) {
  "What a piece of a line says, written out so that two pieces saying the same thing write out the same text and two saying different things never do. Comparing two of these is how a rearranged line is judged: 9 + 7 + 4 and 4 + 9 + 7 keep one key between them, and 11 - 3 === 44 / 4 and 11 - 3 === 4 / 44 get two.";
  "Landing on the same answer was what used to be asked instead, and it is not the same question. A line that comes out false has a great many rearrangements that also come out false - 142 of them for one arithmetic question - and every one was being marked right. What a reader is asked to build is a sentence, not a number, so what is checked is the sentence.";
  "Four things are allowed to move, and they are the four that leave the sentence alone. Two sides of a sign that reads the same both ways may swap. A run of numbers added and taken away may be written in any order, since each number keeps the sign standing in front of it. A run of numbers multiplied and divided may likewise, for the same reason. And a sameness sign may be denied, so long as something else in the same statement is denied along with it - two denials cancel, so (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) are one statement written twice.";
  "Adding is only free like that between numbers, which is why the run is asked whether it is one first. Joined writing keeps the order it was joined in.";
  let adding = js_operator_adding_symbols();
  let scaling = js_operator_scaling_symbols();
  let empty = "";
  let open = "(";
  let close = ")";
  let type = js_node_type(node);
  let binary = list_includes(["BinaryExpression", "LogicalExpression"], type);
  if (binary) {
    let operator = property_get(node, "operator");
    let adds = list_includes(adding, operator);
    let scales = list_includes(scaling, operator);
    let run = adds || scales;
    let writing = js_node_writing_inside_is(node);
    let numbers = not(writing);
    if (run && numbers) {
      let key = js_node_meaning_key_run(node, scales);
      return key;
    }
    let equalities = js_equality_operators();
    let sameness = list_includes(equalities, operator);
    if (sameness) {
      let agreement_key = js_node_meaning_key_agreement(node);
      return agreement_key;
    }
    let binary_key = js_node_meaning_key_sides(node);
    return binary_key;
  }
  let call = equal(type, "CallExpression");
  if (call) {
    let call_key = js_node_meaning_key_call(node);
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
