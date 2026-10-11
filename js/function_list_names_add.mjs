import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_elements_calls_only_assert } from "./js_elements_calls_only_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_missing_add_specified } from "./js_imports_missing_add_specified.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_list_names_add(f_name, names) {
  arguments_assert(arguments, 2);
  ("Adds several functions' names to the end of the list another function hands back, in the order given, together with the imports they need - the plural of the command that adds one.");
  ("Asked for by the human 2026-10-11 as: stop latest at its lesson 292, which held three more lessons at once. Not picked: the one-name command run three times, a loop that leaves no single command behind to name the change.");
  ("Every name is checked against the functions that exist before anything is written, so one misspelt name refuses the whole change rather than leaving the list half added to.");
  let added_names = text_split_comma(names);
  for (let name of added_names) {
    await function_exists_assert(name);
  }
  async function lambda(ast) {
    let elements = js_array_expression_only_elements(ast);
    let declared = js_declared_names(ast);
    js_elements_calls_only_assert(elements, declared);
    for (let name of added_names) {
      let expression = js_identifier_expression(name);
      list_add(elements, expression);
    }
    await js_imports_missing_add_specified(ast, added_names);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
