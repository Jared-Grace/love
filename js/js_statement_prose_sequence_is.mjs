import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { js_prose_part_is } from "./js_prose_part_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { not } from "./not.mjs";
export function js_statement_prose_sequence_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this line is a paragraph written with a bracket and a comma round it, which is a comment to a reader and not a line of work.");
  ("Somebody wanting a function's name inside a sentence writes the sentence, a comma, and the name spelled as a reference, because that is the one spelling a rename follows. The comma turns the statement into a pair, and a pair is not a string - so every reading that recognises a comment by it being a lone string calls this line work and counts it.");
  ("Two readings are hurt by that, and in opposite directions. One counts how much a function does, and answers too big for a function whose paragraphs are simply written this way. The other asks what a fold would silently add to a caller, and names prose as the work it would add, refusing a fold that was safe.");
  ("What each piece inside the brackets is allowed to be is asked next door, because the sibling that reads a paragraph written with a backtick has to ask exactly the same question of exactly the same pieces.");
  let expression = js_statement_expression_of_type_or_null(
    node,
    "SequenceExpression",
  );
  let pair_is = null_not_is(expression);
  if (not(pair_is)) {
    return false;
  }
  let leading = property_list_first(expression, "expressions");
  let string_is = js_literal_text_is(leading);
  if (not(string_is)) {
    return false;
  }
  let parts = property_get(expression, "expressions");
  let all_prose_is = list_all_is(parts, js_prose_part_is);
  return all_prose_is;
}
