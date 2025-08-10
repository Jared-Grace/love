import { function_new_declaration } from "./function_new_declaration.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export async function js_outside_move(ast) {
  let { body } = ast;
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  await each_async(fds, async (fd) => {
    await assert_file_exists_not();
  });
  marker();
  await each_async(fds, async (fd) => {
    await function_new_declaration();
  });
}
