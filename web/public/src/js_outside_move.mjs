import { js_imports_fix } from "./js_imports_fix.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_new_declaration } from "./function_new_declaration.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function js_outside_move(ast) {
  let { body } = ast;
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  async function lambda(fd) {
    let f_name = js_declaration_name(fd);
    let f_path = function_name_to_path(f_name);
    await assert_file_exists_not(f_path);
  }
  await each_async(fds, lambda);
  marker("1");
  async function lambda2(fd) {
    await function_new_declaration(fd);
  }
  await each_async(fds, lambda2);
  function lambda3(fd) {
    list_remove(body, fd);
  }
  each(fds, lambda3);
  await js_imports_missing_add(ast);
  return;
  let v = await js_imports_fix(ast2);
}
