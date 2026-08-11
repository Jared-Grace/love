import { arguments_assert } from "./arguments_assert.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_name_taken_is(ast, name) {
  arguments_assert(arguments, 2);
  ("Whether this file already has the name for something of its own - either it binds the name somewhere, or it imports it.");
  ("Asked before a rename hands a file a name it did not have. The two halves have to be asked together, because a name the file binds and a name the file imports are equally unavailable, and there is nothing a caller could do differently on learning which of the two it was.");
  ("Asking only one half is a bug that has already been paid for. A rename that checked what the file reads but not what the file declares landed on a word an inner scope had declared, and the file it wrote called a value as though it were code.");
  ("Taken is the word both callers were using for this list in their own bodies before it had a name of its own, so nothing here had to be invented.");
  let names = js_binding_names(ast);
  let imports = js_imports(ast);
  let taken = list_concat(names, imports);
  let held_is = list_includes(taken, name);
  return held_is;
}
