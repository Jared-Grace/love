import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_code_array_while_three_ways(
  input,
  log_all,
  move_same,
  move_less,
  move_greater,
) {
  arguments_assert(arguments, 5);
  ("let a, let b, let i = 0, let j = 0; a while asking both are inside, with three branches - a[i] === b[j], else if a[i] < b[j], else - each moving the indexes named for it. When log_all, each branch writes out a[i] and b[j] with its sign between them; otherwise only the === branch writes out, a[i] alone");
  let codes = list_map(input[0], json_to);
  let a = js_code_array(codes);
  let codes2 = list_map(input[1], json_to);
  let b = js_code_array(codes2);
  function moves(names) {
    function line(name) {
      let s = "    " + name + "++;";
      return s;
    }
    let r = list_map(names, line);
    return r;
  }
  function sign_lines(sign) {
    let r2 = log_all
      ? ['    console.log(a[i] + " ' + sign + ' " + b[j]);']
      : [];
    return r2;
  }
  let log_same = log_all
    ? ['    console.log(a[i] + " === " + b[j]);']
    : ["    console.log(a[i]);"];
  let lines = [
    "let a = " + a + ";",
    "let b = " + b + ";",
    "let i = 0;",
    "let j = 0;",
    "while (i < a.length && j < b.length) {",
    "  if (a[i] === b[j]) {",
    ...log_same,
    ...moves(move_same),
    "  } else if (a[i] < b[j]) {",
    ...sign_lines("<"),
    ...moves(move_less),
    "  } else {",
    ...sign_lines(">"),
    ...moves(move_greater),
    "  }",
    "}",
  ];
  let code = list_join_newline(lines);
  return code;
}
