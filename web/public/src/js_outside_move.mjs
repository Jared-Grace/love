import { js_function_declaration_name_to_path } from "../../../love/public/src/js_function_declaration_name_to_path.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_imports_fix } from "../../../love/public/src/js_imports_fix.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { function_new_declaration } from "../../../love/public/src/function_new_declaration.mjs";
import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_outside_move(ast) {
  let body = property_get(ast, "body");
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  async function lambda(fd) {
    let f_path = js_function_declaration_name_to_path(fd);
    await assert_file_exists_not(f_path);
  }
  await each_async(fds, lambda);
  async function lambda2(fd) {
    await function_new_declaration(fd);
  }
  await each_async(fds, lambda2);
  function lambda3(fd) {
    list_remove(body, fd);
  }
  each(fds, lambda3);
  await js_imports_fix(ast);
  log("message");
}
