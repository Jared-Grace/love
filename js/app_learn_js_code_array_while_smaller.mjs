import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_code_array_while_smaller(
  input,
  compare,
  move_if,
  move_else,
  leftovers,
) {
  arguments_assert(arguments, 5);
  ("let a, let b, let i = 0, let j = 0; a while asking both are inside, an if compare writing out a[i] and moving move_if, else writing out b[j] and moving move_else; then, for each of leftovers (a, b or both), a while writing out what is left of that array");
  let codes = list_map(input[0], json_to);
  let a = js_code_array(codes);
  let codes2 = list_map(input[1], json_to);
  let b = js_code_array(codes2);
  let lines = [
    "let a = " + a + ";",
    "let b = " + b + ";",
    "let i = 0;",
    "let j = 0;",
    "while (i < a.length && j < b.length) {",
    "  if (a[i] " + compare + " b[j]) {",
    "    console.log(a[i]);",
    "    " + move_if + "++;",
    "  } else {",
    "    console.log(b[j]);",
    "    " + move_else + "++;",
    "  }",
    "}",
  ];
  let index_of = {
    a: "i",
    b: "j",
  };
  for (let name of leftovers) {
    let index = property_get(index_of, name);
    lines.push("while (" + index + " < " + name + ".length) {");
    lines.push("  console.log(" + name + "[" + index + "]);");
    lines.push("  " + index + "++;");
    lines.push("}");
  }
  let code = list_join_newline(lines);
  return code;
}
