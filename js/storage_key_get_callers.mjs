import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_composers } from "./storage_key_composers.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { add } from "./add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { greater_than } from "./greater_than.mjs";
export async function storage_key_get_callers() {
  "Every function in the repo that composes a browser storage key, read off the calls rather than off any list. Read-only.";
  "The set of places a key is made is exactly the set of places that call one of the functions that make one, and that is a question the trees can answer outright. It is asked so that the two lists saying which of those stores a name durably can be checked against the code instead of trusted.";
  "The composers themselves are left out: they make the key, they do not choose the store. That includes the one composer calling the other, which would otherwise arrive here as a place needing to be classified and has no store standing behind it to classify.";
  "The calls are counted from the tree rather than from the letters, so a name written in a sentence about the composing is not mistaken for a call to it.";
  arguments_assert(arguments, 0);
  let composers = storage_key_composers();
  let repo_name = repo_love_name();
  let callers = [];
  for (let composer of composers) {
    let candidates = await repo_functions_names_code_includes(
      repo_name,
      composer,
    );
    for (let f_name of candidates) {
      let composer_is = list_includes(composers, f_name);
      if (composer_is) {
        continue;
      }
      let ast = await function_ast(f_name);
      let calls = 0;
      function count() {
        calls = add(calls, 1);
      }
      js_visit_calls_named_nodes(ast, composer, count);
      let called = greater_than(calls, 0);
      let fresh = list_includes_not(callers, f_name);
      if (called && fresh) {
        list_add(callers, f_name);
      }
    }
  }
  callers.sort();
  return callers;
}
