import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_prose_template_sentences } from "./js_prose_template_sentences.mjs";
export function function_prose_lines_template(code) {
  arguments_assert(arguments, 1);
  ("Every line of a function's own account of itself that was written with backticks, read out of its source.");
  ("The sibling that reads pairs is the other half of the same repair. Both parse, both are asked only of the files that could be carrying the shape, and both exist because the fast reader recognises a paragraph by the whole line being one quoted string - which a backtick is not, and which a line broken round a name is not either.");
  ("A file that will not read in gives nothing back rather than throwing, the same as everywhere else a sweep meets a file mid-write.");
  let ast = js_parse_try(code);
  let torn = null_is(ast);
  if (torn) {
    let r = [];
    return r;
  }
  let lines = js_prose_template_sentences(ast);
  return lines;
}
