import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_function_declared_lines(name, body_lines) {
  arguments_assert(arguments, 2);
  ("the lines declaring a function that takes nothing: its first line, each body line indented two spaces, and the closing brace - so every function lesson writes a function the same way");
  function indented(line) {
    let r = "  " + line;
    return r;
  }
  let body = list_map(body_lines, indented);
  let lines = ["function " + name + "() {", ...body, "}"];
  return lines;
}
