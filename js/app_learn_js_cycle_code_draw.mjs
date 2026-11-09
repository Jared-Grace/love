import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
export function app_learn_js_cycle_code_draw(parts) {
  arguments_assert(arguments, 1);
  ("a line of text and code chips as a draw function, for a place that takes something to draw rather than the parts themselves - a cell of ",
    fn_name("app_learn_js_rows_aligned"),
    " beside a drawn arrow");
  function draw(parent) {
    app_learn_js_cycle_code(parent, parts);
  }
  return draw;
}
