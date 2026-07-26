import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_html_style_set_to_helpers } from "./js_html_style_set_to_helpers.mjs";
import { function_transform } from "./function_transform.mjs";
import { equal } from "./equal.mjs";
export async function function_html_style_literals_migrate(f_name, helpers) {
  "Rewrite one function's style properties set by name into the named helpers, and say whether anything moved.";
  let f_path = await function_name_to_path(f_name);
  let code_before = await file_read(f_path);
  function lambda(ast) {
    js_html_style_set_to_helpers(ast, helpers);
  }
  await function_transform(f_name, lambda);
  let code_after = await file_read(f_path);
  let same = equal(code_before, code_after);
  let result = {
    name: f_name,
    changed: !same,
  };
  return result;
}
