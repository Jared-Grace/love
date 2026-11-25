import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_code_array_two_loops_push_c(
  input,
  asked_a,
  asked_b,
) {
  arguments_assert(arguments, 3);
  ("let a = input[0]; let b = input[1]; let c = []; a loop over a, then a loop over b, each pushing its item into c inside if (asked + item + ')') - or with no if when asked is empty; then console.log(c). The program of In either and In one only, where only the questions differ");
  function loop_lines(name, asked) {
    let item = name + "[i]";
    let head = ["for (let i = 0; i < " + name + ".length; i++) {"];
    let push = "c.push(" + item + ");";
    let middle = equal(asked, "")
      ? ["  " + push]
      : ["  if (" + asked + item + ")) {", "    " + push, "  }"];
    let with_head = list_concat(head, middle);
    let lines = list_concat(with_head, ["}"]);
    return lines;
  }
  let head2 = [
    "let a = " + js_code_array(input[0]) + ";",
    "let b = " + js_code_array(input[1]) + ";",
    "let c = [];",
  ];
  let loop_a = loop_lines("a", asked_a);
  let loop_b = loop_lines("b", asked_b);
  let loops = list_concat(loop_a, loop_b);
  let top = list_concat(head2, loops);
  let all_lines = list_concat(top, ["console.log(c);"]);
  let code = list_join_newline(all_lines);
  return code;
}
