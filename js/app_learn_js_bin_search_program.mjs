import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_else_if_with_else_lines_multiple } from "./js_code_if_else_if_with_else_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_bin_search_program(input, way) {
  arguments_assert(arguments, 2);
  ("the whole binary search over input.items for input.goal, writing out found. way is right; wrong_side, which moves low when the middle item is bigger than goal and so looks in the wrong half; ",
    fn_name("less_than"),
    ", which asks low < high and so never looks at a last item where low and high meet; start_true, which starts found at true and so writes out true when goal is not there; or sorted, the right program over the items put in order first");
  ("2026-11-20, approved by the human: sum and middle are the two lines of Middle of two names, so nothing in the step is spelled a new way");
  let items = input.items;
  if (equal(way, "sorted")) {
    function lambda(x, y) {
      let difference = subtract(x, y);
      return difference;
    }
    items = items.slice().sort(lambda);
  }
  let codes = list_map(items, json_to);
  let right = js_code_array(codes);
  let code2 = js_code_let_statement("a", right);
  let right2 = json_to(input.goal);
  let code3 = js_code_let_statement("goal", right2);
  let code4 = js_code_let_statement("low", "0");
  let code5 = js_code_let_statement("high", "a.length - 1");
  let found_first = equal(way, "start_true") ? "true" : "false";
  let code6 = js_code_let_statement("found", found_first);
  let lets = [code2, code3, code4, code5, code6];
  let test = equal(way, "wrong_side") ? "a[middle] > goal" : "a[middle] < goal";
  let step = js_code_if_else_if_with_else_lines_multiple(
    "a[middle] === goal",
    ["found = true;", "break;"],
    test,
    ["low = middle + 1;"],
    ["high = middle - 1;"],
  );
  let code7 = js_code_let_statement("sum", "low + high");
  let code8 = js_code_let_statement("middle", "Math.floor(sum / 2)");
  let body = list_concat_multiple([[code7, code8], step]);
  let condition = equal(way, fn_name("less_than"))
    ? "low < high"
    : "low <= high";
  let loop = js_code_while_lines_multiple(condition, body);
  let log_line = js_code_console_log_statement("found");
  let lines = list_concat_multiple([lets, loop, [log_line]]);
  let code = list_join_newline(lines);
  return code;
}
