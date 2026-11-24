import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_code_array_for_if_push_c(input, asked) {
  arguments_assert(arguments, 2);
  ("let a = input[0]; let b = input[1]; let c = []; for (let i = 0; i < a.length; i++) { if (asked) { c.push(a[i]); } } console.log(c); - the program of In both and In a, not in b, where only the question asked differs");
  let lines = [
    "let a = " + js_code_array(input[0]) + ";",
    "let b = " + js_code_array(input[1]) + ";",
    "let c = [];",
    "for (let i = 0; i < a.length; i++) {",
    "  if (" + asked + ") {",
    "    c.push(a[i]);",
    "  }",
    "}",
    "console.log(c);",
  ];
  let code = list_join_newline(lines);
  return code;
}
