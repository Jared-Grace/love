import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_prose_sequence_sentences(ast) {
  arguments_assert(arguments, 1);
  ("Every sentence in one file that was written to explain the code but wrapped in brackets beside something else, so the reader that gathers explanations never sees it.");
  ("An explanation counts as one only when it is a string standing alone as a whole statement. Put a bracket round it and a second thing after a comma, and the statement is no longer a string - it is a pair - so the file reads as saying nothing about itself even while carrying paragraphs.");
  ("The shape is easy to arrive at by accident. Somebody wanting the name of a command inside the sentence writes the sentence, a comma, and the name spelled as a reference, which is the one way to keep a rename following it. That single comma is what hides the whole paragraph.");
  ("The whole paragraph is put back together and handed over as one sentence, the name standing where it was written. Only the leading string used to be handed back, on the reading that what follows a name belongs to whatever the sentence was pointing at - which is true of the name and false of everything after it. A hundred and seventy-two of the hundred and eighty paragraphs here carry on past the name, and one carries on for four more lines, so stopping there was stopping mid-sentence rather than trimming a tail.");
  let sentences = [];
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
    let string_is = text_is(value);
    if (not(string_is)) {
      continue;
    }
    let parts = property_get(expression, "expressions");
    let sentence = list_map_join_empty(parts, js_prose_part_text);
    list_add(sentences, sentence);
  }
  return sentences;
}
