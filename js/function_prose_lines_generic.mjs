import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
export function function_prose_lines_generic(code, sentences) {
  arguments_assert(arguments, 2);
  ("Every line of a function's own account of itself that only a tree can find, read out of its source by whichever reader is handed in.");
  ("The fast reader recognises a paragraph by the whole line being one quoted string, and there are two ordinary ways to write a paragraph that is not that: broken round a name spelled as a reference, and written with backticks so the name can stand in a gap. Both need the file parsed, and everything about parsing it is the same either way, so the only difference between the two is which sentences are gathered afterwards - which is the part handed in.");
  ("A file that will not read in gives nothing back rather than throwing, the same as everywhere else a sweep meets a file mid-write.");
  let ast = js_parse_try(code);
  let torn = null_is(ast);
  if (torn) {
    let r = [];
    return r;
  }
  let lines = sentences(ast);
  return lines;
}
