import { js_function_declaration_name_to_path } from "./js_function_declaration_name_to_path.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
import { file_exists_not_assert } from "./file_exists_not_assert.mjs";
import { each_async } from "./each_async.mjs";
export async function js_outside_move(ast) {
  let body = property_get(ast, "body");
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  async function lambda(fd) {
    let f_path = js_function_declaration_name_to_path(fd);
    await file_exists_not_assert(f_path);
  }
  await each_async(fds, lambda);
  async function lambda2(fd) {
    await function_new_declaration_from(fd);
  }
  await each_async(fds, lambda2);
  function lambda3(fd) {
    list_remove(body, fd);
  }
  each(fds, lambda3);
  await js_imports_fix(ast);
}
