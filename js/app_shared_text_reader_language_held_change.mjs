import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { js_object_expression_value_set } from "./js_object_expression_value_set.mjs";
import { function_transform } from "./function_transform.mjs";
export async function app_shared_text_reader_language_held_change(
  f_name,
  lambda$saying,
) {
  "$plain f_name";
  "Hands the saying a function answers with to somebody who may change it, and puts back onto the page whatever comes back.";
  "The partner of the change over sayings handed to the reader where they are written. Some sayings are kept under a name of their own and fetched from it, because a second moment needs the same words with nobody to ask who is reading; such a function never asks for a language itself, so the change that looks for the asking walks straight past it.";
  "The record is found the same way the count finds it - the function's own answer, written out as a record - so what this changes is exactly what the count was complaining about.";
  "Nothing back means leave it alone, and a record that cannot be read off the page is passed over.";
  arguments_assert(arguments, 2);
  async function lambda(ast) {
    let function_nodes = js_list_type_nodes(ast, "FunctionDeclaration");
    for (let function_node of function_nodes) {
      let id = property_get(function_node, "id");
      let unnamed = null_is(id);
      if (unnamed) {
        continue;
      }
      let named = property_equals(id, "name", f_name);
      if (not(named)) {
        continue;
      }
      let returns = js_function_returns_own(function_node);
      for (let one of returns) {
        let object = js_return_object_expression_try(one, function_node);
        let missing = null_is(object);
        if (missing) {
          continue;
        }
        let saying = js_literal_value_deep_try(object);
        let unreadable = null_is(saying);
        if (unreadable) {
          continue;
        }
        let changed = await lambda$saying(saying);
        let unchanged = null_is(changed);
        if (unchanged) {
          continue;
        }
        js_object_expression_value_set(object, changed);
      }
    }
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
