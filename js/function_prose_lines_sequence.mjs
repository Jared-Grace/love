import { function_prose_lines_generic } from "./function_prose_lines_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_sequence_sentences } from "./js_prose_sequence_sentences.mjs";
export function function_prose_lines_sequence(code) {
  "Every line of a function's own account of itself that a bracket and a comma have turned into a pair, read out of its source.";
  "The sibling next door reads lines rather than a tree, which is what makes it fast enough to run over the whole repo, and is also exactly why it cannot see these. A paragraph written with a name spelled as a reference inside it is one statement written across three lines, and no one of those three lines is a whole quoted string.";
  "So this one parses, and is meant to be asked second. Eighty-four functions in this repo say a great deal about themselves and are recorded as saying nothing, which is worse than being silent: a silent function appears on the list of functions wanting an account, so somebody eventually writes one, and these appear there too and cannot be taken off by writing more.";
  "The parsing itself, and giving nothing back for a file that will not read in, are shared with the reader of the other shape, so they live in the half both call.";
  arguments_assert(arguments, 1);
  let lines = function_prose_lines_generic(code, js_prose_sequence_sentences);
  return lines;
}
