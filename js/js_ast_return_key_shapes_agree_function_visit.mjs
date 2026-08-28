import { property_get } from "./property_get.mjs";
import { js_ast_return_key_shapes_agree_function_visit_several } from "./js_ast_return_key_shapes_agree_function_visit_several.mjs";
import { js_ast_return_key_shapes_agree_function_visit_record } from "./js_ast_return_key_shapes_agree_function_visit_record.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function js_ast_return_key_shapes_agree_function_visit(visited) {
  arguments_assert(arguments, 1);
  let r = js_ast_return_key_shapes_agree_function_visit_several(visited);
  let several = property_get(r, "several");
  let wanted = property_get(r, "wanted");
  let records = property_get(r, "records");
  if (not(several)) {
    return;
  }
  js_ast_return_key_shapes_agree_function_visit_record(records, wanted);
}
