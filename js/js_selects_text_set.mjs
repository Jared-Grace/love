import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_literal } from "./js_selects_literal.mjs";
import { js_literal_value_set } from "./js_literal_value_set.mjs";
export function js_selects_text_set(ast, selects, text) {
  "$plain text";
  "Puts a written-out word in place of the one a selection holds.";
  "WRITING OVER A VALUE WAS THE COMMONEST HAND-MADE EDIT THAT NOTHING NAMED COULD MAKE. Measured over two thousand commits, twenty-four single-file hand edits changed one written-out value and nothing else, which is more than every prose edit no verb spanned put together. The verb for it half existed already: one that finds a named part of a record across a whole file and refuses unless exactly one part carries that name - which refuses precisely the file where the same name is written under every record.";
  "IT TAKES A SELECTION RATHER THAN A NAME, and that is the whole difference. Which value is meant is a question the address answers, and the addresses already compose - a record picked out by a word it says about itself, then opened at the part wanted - so the verb has only to write, and pairs with every way of getting there at once.";
  arguments_assert(arguments, 3);
  let literal = js_selects_literal(ast, selects);
  js_literal_value_set(literal, text);
}
