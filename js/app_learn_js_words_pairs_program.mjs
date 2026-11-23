import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_words_pairs_program(saying, start, body, logged) {
  arguments_assert(arguments, 4);
  ("the program of a lesson over each word of a sentence and the word after it: s set to saying, split at a space into a, the lines of start, a for loop over a that stops one word early, the lines of body inside it, then logged written out");
  ("start and body are lists of lines, body already indented by two spaces; logged is the code inside console.log. The loop stops at a.length - 1 so a[i + 1] is always a word");
  let lines = [
    "let s = " + json_to(saying) + ";",
    'let a = s.split(" ");',
    ...start,
    "for (let i = 0; i < a.length - 1; i++) {",
    ...body,
    "}",
    "console.log(" + logged + ");",
  ];
  let code = list_join_newline(lines);
  return code;
}
