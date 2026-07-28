import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { equal } from "./equal.mjs";
export function js_block_local_number_add(ast, selects, name, given) {
  arguments_assert(arguments, 4);
  ("Binds a name to a starting count. Nearly always nought, since this is the line");
  ("a tally opens with.");
  ("Whole numbers only, and that is the seam speaking rather than a choice: the");
  ("splitter that hands a joined list of arguments over breaks on a full stop, so");
  ("a fraction could never have arrived here in one piece anyway. What does arrive");
  ("is checked, and anything that is not a number is refused rather than written");
  ("into the file as if it were one.");
  let number = integer_from_base_try(given, 10);
  let missing = equal(number, null);
  if (missing) {
    throw new Error(
      "A starting count has to be a whole number, and this one reads as " +
        given +
        ". Try 0 for a tally that counts up from nothing.",
    );
  }
  let value_code = String(number);
  js_block_local_add_generic(ast, selects, name, value_code);
}
