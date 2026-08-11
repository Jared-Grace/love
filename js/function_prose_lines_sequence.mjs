import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { js_prose_sequence_sentences } from "./js_prose_sequence_sentences.mjs";
import { null_is } from "./null_is.mjs";
export function function_prose_lines_sequence(code) {
  "Every line of a function's own account of itself that a bracket and a comma have turned into a pair, read out of its source.";
  "The sibling next door reads lines rather than a tree, which is what makes it fast enough to run over the whole repo, and is also exactly why it cannot see these. A paragraph written with a name spelled as a reference inside it is one statement written across three lines, and no one of those three lines is a whole quoted string.";
  "So this one parses, and is meant to be asked second. Eighty-four functions in this repo say a great deal about themselves and are recorded as saying nothing, which is worse than being silent: a silent function appears on the list of functions wanting an account, so somebody eventually writes one, and these appear there too and cannot be taken off by writing more.";
  "A file that will not read in gives nothing back rather than throwing, the same as everywhere else a sweep meets a file mid-write.";
  arguments_assert(arguments, 1);
  let ast = js_parse_try(code);
  let torn = null_is(ast);
  if (torn) {
    let r = [];
    return r;
  }
  let lines = js_prose_sequence_sentences(ast);
  return lines;
}
