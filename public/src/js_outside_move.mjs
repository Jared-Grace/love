import { function_new_declaration } from "./function_new_declaration.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function js_outside_move(ast) {
  let { body } = ast;
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  await each_async(fds, async (fd) => {
    let f_name = js_declaration_name(fd);
    let f_path=function_name_to_path(f_name)
    await assert_file_exists_not(f_path);
  });
  marker();
  await each_async(fds, async (fd) => {
    await function_new_declaration(fd);
  });
  await each_async(fds, async (fd) => {
    await function_new_declaration(fd);
  });
}
