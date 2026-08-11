import { js_statement_prose_of_type_is } from "./js_statement_prose_of_type_is.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { not } from "./not.mjs";
export function js_statement_prose_sequence_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this line is a paragraph written with a bracket and a comma round it, which is a comment to a reader and not a line of work.");
  ("Somebody wanting a function's name inside a sentence writes the sentence, a comma, and the name spelled as a reference, because that is the one spelling a rename follows. The comma turns the statement into a pair, and a pair is not a string - so every reading that recognises a comment by it being a lone string calls this line work and counts it.");
  ("Two readings are hurt by that, and in opposite directions. One counts how much a function does, and answers too big for a function whose paragraphs are simply written this way. The other asks what a fold would silently add to a caller, and names prose as the work it would add, refusing a fold that was safe.");
  ("What each piece inside the brackets is allowed to be is asked next door, because the sibling that reads a paragraph written with a backtick has to ask exactly the same question of exactly the same pieces.");
  let all_prose_is = js_statement_prose_of_type_is(node, "SequenceExpression");
  if (not(all_prose_is)) {
    return false;
  }
  ("The first piece is asked about after the rest, not before, because asking it first is the one step the sibling next door does not take and so the one step that cannot be shared. Both have to hold either way, and which is asked first cannot change the answer.");
  let expression = property_get(node, "expression");
  let leading = property_list_first(expression, "expressions");
  let string_is = js_literal_text_is(leading);
  return string_is;
}
