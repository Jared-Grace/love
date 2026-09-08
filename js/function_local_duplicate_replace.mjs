import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_node_find_named_node } from "./js_function_node_find_named_node.mjs";
import { js_statement_delete } from "./js_statement_delete.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
export async function function_local_duplicate_replace(
  f_name,
  local_name,
  f_name_shared,
) {
  "Take one function written inside another out of it, and point everything that called it at the shared function doing the same work.";
  "The collapse a whole repo full of copies is made of, done one place at a time so that each one is a change with its own name and its own real arguments. The reading beside this one decides which places these are, by comparing what the copy does with what the shared function does rather than by comparing the words either of them is written in.";
  "The name is taken away before the calls are pointed, because the line declaring it is a use of that name like any other. Pointed first, the declaration would be rewritten to declare the shared name and then deleted, which lands in the same place by a route where a failure in between leaves a file declaring a function the repo already answers to.";
  "It canonicalizes afterwards, and that is not tidying. The calls now name a function this file has never imported, so until the pass has been over it the file reads a name nothing binds - and a commit taken in that gap records a file that does not load.";
  "It does not commit. The sweep above it commits each place as it lands, which is what keeps a peer's sweep able to take one step's work rather than a whole run's.";
  arguments_assert(arguments, 3);
  function edit(ast) {
    let node = js_function_node_find_named_node(ast, local_name);
    js_statement_delete(ast, [node]);
    let replacer = function_identifier_replace_lambda(
      local_name,
      f_name_shared,
    );
    replacer(ast);
  }
  await function_transform(f_name, edit);
  let checked = await function_auto_checked(f_name);
  return checked;
}
