import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_equals } from "./property_equals.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
export function app_shared_text_reader_language_held_object_try(
  records,
  f_name,
) {
  "$plain f_name";
  "The sayings a function of this name writes out, read off the file that function lives in, and nothing at all when there is no such function or it does not plainly answer with a record written out in words.";
  "A saying is not always written out at the place it is used, and one reason for that is a good one. The same words can be wanted at a second moment that has nobody to ask what language is being read - the notice shown when an app never started is built while the page is built - so the words are put under a name of their own and both moments call for that name. Nothing about them has become uncountable: they are still written down, still in this folder, and still readable without running anything. Following the name is what keeps them counted.";
  "The words are looked for in the file the name says they are in, rather than anywhere they might be found, because one function to a file is the whole of this folder's layout and a search that did not rely on it would be free to answer with a different function of the same name.";
  arguments_assert(arguments, 2);
  let file = js_file_name(f_name);
  for (let record of records) {
    let same = equal(record.file, file);
    if (not(same)) {
      continue;
    }
    let ast = js_parse(record.text);
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
        return object;
      }
    }
  }
  return null;
}
