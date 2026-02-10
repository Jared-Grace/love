import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_declaration_single_block_body_add_return } from "../../../love/public/src/js_declaration_single_block_body_add_return.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { function_new_js_name } from "../../../love/public/src/function_new_js_name.mjs";
export async function js_auto_transform_new_inner(f_name_unprefixed) {
  let combined = function_new_js_name(f_name_unprefixed);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    let expression = js_parse_expression(combined);
    list_add(elements, expression);
    let ast = property_get(a, "ast");
    js_declaration_single_block_body_add_return(ast);
    await js_imports_missing_add(ast);
  }
  let code = await function_transform_marker_specified(
    js_auto_transforms.name,
    "transforms",
    lambda,
  );
  await function_open(js_auto_transforms.name);
}
