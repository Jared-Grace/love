import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
export function js_functions_named_all(functions, name) {
  arguments_assert(arguments, 2);
  ("Every one of these functions written under the name you give - none, one, or several.");
  ("The finder next door wants exactly one and says so when there is any other number. Whoever wants to know the number before asking for the one wants this instead, and both read it from the same line so the two cannot come to different answers about the same word.");
  function lambda(declaration) {
    let named = js_function_declaration_name(declaration);
    let matched = equal(named, name);
    return matched;
  }
  let found = list_filter(functions, lambda);
  return found;
}
