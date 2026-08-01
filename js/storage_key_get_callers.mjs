import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { add } from "./add.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function storage_key_get_callers() {
  "Every function in the repo that composes a browser storage key, read off the calls rather than off any list. Read-only.";
  "The composing is one function, so the set of places a key is made is exactly the set of places that call it, and that is a question the trees can answer outright. It is asked so that the two lists saying which of those stores a name durably can be checked against the code instead of trusted.";
  "The composer itself is left out: it makes the key, it does not choose the store.";
  "The calls are counted from the tree rather than from the letters, so a name written in a sentence about the composing is not mistaken for a call to it.";
  arguments_assert(arguments, 0);
  let composer = fn_name("storage_key_get");
  let repo_name = repo_love_name();
  let candidates = await repo_functions_names_code_includes(
    repo_name,
    composer,
  );
  let callers = [];
  for (let f_name of candidates) {
    let itself = equal(f_name, composer);
    if (itself) {
      continue;
    }
    let ast = await function_ast(f_name);
    let calls = 0;
    function count() {
      calls = add(calls, 1);
    }
    js_visit_calls_named_nodes(ast, composer, count);
    let called = greater_than(calls, 0);
    if (called) {
      list_add(callers, f_name);
    }
  }
  callers.sort();
  return callers;
}
