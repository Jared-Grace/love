import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_prose_sequence_literal_nodes(ast) {
  arguments_assert(arguments, 1);
  ("Every string that is part of an explanation written in brackets beside something else, handed back as the strings themselves.");
  ("Its neighbour hands back the sentence those strings spell, which is what a reader of explanations wants. This hands back the pieces, which is what a hunt for strings the code actually uses wants: such a hunt has to take the explanations out first, and it can only take out what it can recognise by identity.");
  ("Without this, a paragraph wrapped in brackets reads as words the function says out loud. That is not a rare shape - it is what anybody writes who wants a name spelled as a reference inside a sentence - and the one that carries the reach into a record is written that way, so every reach into a record anywhere looked like a screenful of english.");
  let literals = [];
  for (let node of js_list_type_nodes(ast, "ExpressionStatement")) {
    let expression = property_get(node, "expression");
    let pair_is = js_node_type_is(expression, "SequenceExpression");
    if (not(pair_is)) {
      continue;
    }
    let leading = property_list_first(expression, "expressions");
    let literal_is = js_literal_is(leading);
    if (not(literal_is)) {
      continue;
    }
    let value = js_literal_value_get(leading);
    let words_is = text_is(value);
    if (not(words_is)) {
      continue;
    }
    let parts = js_list_type_nodes(expression, "Literal");
    list_add_multiple(literals, parts);
  }
  return literals;
}
