import { arguments_assert } from "./arguments_assert.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { functions_names } from "./functions_names.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { file_read } from "./file_read.mjs";
import { text_includes } from "./text_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_calls_property_key_literal } from "./js_calls_property_key_literal.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_rename_keys_named(a_name) {
  "$plain a_name";
  arguments_assert(arguments, 1);
  ("The app's own functions that read the app's short name as a key rather than hold it as a value. A rename moves every whole written-out copy of the name in those functions, which is right for a value and wrong for a key: the object it is read from keeps the old key, so the read comes back empty.");
  ("Measured on the search app, where a page's own search action was filed under the key search and would have gone missing the moment the app was renamed.");
  let main = "app_" + a_name;
  let prefix = main + "_";
  let quoted = text_quote_double(a_name);
  let all = await functions_names();
  let named = [];
  for (let f_name of all) {
    let mine = equal(f_name, main) || text_starts_with(f_name, prefix);
    if (not(mine)) {
      continue;
    }
    let f_path = await function_name_to_path_found(f_name);
    let code = await file_read(f_path);
    let b = text_includes(code, quoted);
    if (not(b)) {
      continue;
    }
    let ast = await function_ast(f_name);
    let calls = js_calls_property_key_literal(ast, a_name);
    if (list_empty_not_is(calls)) {
      list_add(named, f_name);
    }
  }
  return named;
}
