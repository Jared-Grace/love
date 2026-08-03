import { arguments_assert } from "./arguments_assert.mjs";
import { js_functions_nested_declarations } from "./js_functions_nested_declarations.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { equal } from "./equal.mjs";
export function js_function_nested_find_named(ast, name) {
  arguments_assert(arguments, 2);
  ("The function written inside the exported one under the name you give, however deep it sits.");
  ("Addressed by its own name rather than by where it stands, because a closure keeps its name while every line around it moves - and because the thing worth reaching for is nearly always already named. Most of a long function's size sits inside a closure written beside the lines that use it, and a span cannot reach into one: the span extractor sees the whole closure as a single statement and can only wrap it up again.");
  ("Which functions are even candidates is asked next door, by the same reader the size report and the candidate report ask. All this adds is the name.");
  let declarations = js_functions_nested_declarations(ast);
  function lambda(declaration) {
    let named = js_function_declaration_name(declaration);
    let matched = equal(named, name);
    return matched;
  }
  let found = list_find_or_null(declarations, lambda);
  null_not_is_assert_json(found, {
    hint: "no function written inside this one is declared under that word. Would you like to check the spelling, or name one the function really writes?",
    name,
  });
  return found;
}
