import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export async function js_outside_move(ast) {
  let { body } = ast;
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  marker();
  await each_async(fds, async(fd) => {});
}
