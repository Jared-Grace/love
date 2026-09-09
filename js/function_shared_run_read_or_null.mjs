import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_shared_run_read_or_null } from "./js_function_declaration_shared_run_read_or_null.mjs";
export async function function_shared_run_read_or_null(shared_name) {
  arguments_assert(arguments, 1);
  ("Everything needed to go looking for copies of the named function's body written inside other functions, or nothing at all when its body is not a run of work handing back one name that run made.");
  ("The reading below this one is handed a parsed function and knows nothing about where functions live. Both callers of it start from a name, and both then write the same three lines to get from the name to the tree: open it, take the declaration out of what came back, ask. Written twice, those three lines are the whole of what the two shared, and that is a helper waiting rather than anything either of them is about.");
  ("Nothing is decided here that the reading below does not decide. It is the same answer reached from a name instead of from a tree, which is the form the rest of the repo asks its questions in.");
  let parsed = await function_parse_declaration(shared_name);
  let declaration = property_get(parsed, "declaration");
  let shared = js_function_declaration_shared_run_read_or_null(declaration);
  return shared;
}
