import { property_get } from "./property_get.mjs";
import { js_flo_body_add_return } from "./js_flo_body_add_return.mjs";
import { function_open } from "./function_open.mjs";
import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { list_add } from "./list_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { marker_next_declare_single_init_elements } from "./marker_next_declare_single_init_elements.mjs";
import { function_new_js_name } from "./function_new_js_name.mjs";
export async function js_auto_transform_new_inner(f_name_unprefixed) {
  let combined = function_new_js_name(f_name_unprefixed);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    let expression = js_parse_expression(combined);
    list_add(elements, expression);
    let ast = property_get(a, "ast");
    js_flo_body_add_return(ast);
    await js_imports_missing_add_all(ast);
  }
  let code = await function_transform_marker_specified(
    js_auto_transforms.name,
    "transforms",
    lambda,
  );
  await function_open(js_auto_transforms.name);
}
