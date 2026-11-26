import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_objects_array_lines(variable, objects, keys) {
  arguments_assert(arguments, 3);
  ('the lines of a program making an array of objects, one object to a line: let items = [ then { name: "bread", price: 3 }, and so on, then ];');
  ("Each object's line starts at the left edge, not two spaces in, as Writing out an array of people writes them: the put-the-lines-in-order quiz indents only for a { still open.");
  function line_of(object) {
    let line = app_learn_js_object_code(object, keys) + ",";
    return line;
  }
  let mapped = list_map(objects, line_of);
  let lines = ["let " + variable + " = ["].concat(mapped).concat(["];"]);
  return lines;
}
