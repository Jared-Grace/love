import { js_statement_prose_of_type_is } from "./js_statement_prose_of_type_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_statement_prose_template_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this line is a paragraph written with backticks, which is a comment to a reader and not a line of work.");
  ("It is the other way of putting a name inside a sentence, and the one this repo tells a writer to reach for: bind the name above, then write the sentence with the name standing in a gap in it. So it is the shape that will keep arriving, and every reading that recognises a comment by it being a lone string is blind to it in exactly the way it is blind to the sibling next door.");
  ("What may stand in the gaps is the same question the sibling asks of what stands between its commas, and is asked in the same place. A gap holding something that does something makes this a line of work, whatever it looks like.");
  let all_prose_is = js_statement_prose_of_type_is(node, "TemplateLiteral");
  return all_prose_is;
}
