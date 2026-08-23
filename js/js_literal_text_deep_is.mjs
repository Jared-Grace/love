import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { text_is } from "./text_is.mjs";
export function js_literal_text_deep_is(node) {
  "Whether this piece of code is words standing written out where it is, counting words written out in several parts joined together as written out.";
  "It is the question a reader of doors has to ask before it can say anything about a word going onto a page. A word written out here can be read now; a word handed in from somewhere else is settled while the app runs, and no reading of the code can say what it will be. Those are not two degrees of the same answer, they are the difference between a reading that saw something and a reading that met nothing.";
  "It is a name of its own so that the two readers that ask it ask the same thing. One wants the words and gives up when there are none; the other only wants to know that there were none, so that it can count how often that happens. Asked separately they would drift, and the count would then be about doors the other reader no longer watches.";
  arguments_assert(arguments, 1);
  let words = js_literal_value_deep_try(node);
  let written = text_is(words);
  return written;
}
