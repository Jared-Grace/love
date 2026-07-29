import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_calls_named_sized } from "./js_calls_named_sized.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_calls_named_sized(f_name, count) {
  arguments_assert(arguments, 2);
  ("Every function in this repo that calls one name with exactly this many things.");
  ("The set a move has to visit, found rather than listed. A list written out by");
  ("hand is a guess about the repo made somewhere other than the repo, and it goes");
  ("stale the moment somebody writes the same mistake again - whereas asking is");
  ("right every time it is asked.");
  let love = await repo_functions_names("love");
  let callers = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let calls = js_calls_named_sized(ast, f_name, count);
    let any = list_empty_not_is(calls);
    if (any) {
      list_add(callers, name);
    }
  }
  return callers;
}
