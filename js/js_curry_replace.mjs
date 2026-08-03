import { js_curry_replace_visitor } from "./js_curry_replace_visitor.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { js_imports_missing_add_specified } from "./js_imports_missing_add_specified.mjs";
import { functions_names } from "./functions_names.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
export async function js_curry_replace(ast) {
  let f_names = await functions_names();
  let lambda = await js_curry_replace_visitor(ast, f_names);
  let f_names_added = await list_adder_unique_async(lambda);
  await js_imports_missing_add_specified(ast, f_names_added);
  await js_imports_unused_remove(ast);
}
