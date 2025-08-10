import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export function js_outside_move(ast) {
  let { body } = ast;
  let fds= list_filter_property(body, "type", "FunctionDeclaration");
  marker()
}
