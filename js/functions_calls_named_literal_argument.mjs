import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_calls_named_literal_argument } from "./js_calls_named_literal_argument.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_calls_named_literal_argument(f_name, literal) {
  "$plain literal";
  arguments_assert(arguments, 2);
  ("Every function in this repo that hands one named helper a single written-out word, where that word is the one being asked about.");
  ("The set a move across to a word-free helper has to visit, found rather than listed. Asking is right every time it is asked; a list written out by hand is a guess about the repo made somewhere other than the repo, and it goes stale the moment somebody writes the same line again.");
  ("Asking it a second time after the move is what says the move worked. A count of what was changed says only what was attempted, and the two differ exactly when something went wrong.");
  ("Only this repo's own functions are asked. The sweep that gathers names across the folder gathers every repo standing beside this one too, and a file that really lives elsewhere cannot reach a helper in here at all - so it would be named as needing a change that would break it.");
  let f_names = await repo_love_functions_names();
  let callers = [];
  for (let name of f_names) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let calls = js_calls_named_literal_argument(ast, f_name, literal);
    let any = list_empty_not_is(calls);
    if (any) {
      list_add(callers, name);
    }
  }
  return callers;
}
