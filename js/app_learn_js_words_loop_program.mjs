import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_words_loop_program(saying, start, body, logged) {
  arguments_assert(arguments, 4);
  ("the program of a lesson over the words of a sentence: s set to saying, split at a space into a, the lines of start, a for loop over a whose first line names the word w, the lines of body inside it, then logged written out");
  ("start and body are lists of lines, body already indented by two spaces; logged is the code inside console.log");
  let lines = [
    "let s = " + json_to(saying) + ";",
    'let a = s.split(" ");',
    ...start,
    "for (let i = 0; i < a.length; i++) {",
    "  let w = a[i];",
    ...body,
    "}",
    "console.log(" + logged + ");",
  ];
  let code = list_join_newline(lines);
  return code;
}
