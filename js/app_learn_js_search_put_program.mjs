import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_learn_js_search_put_program(words, search, middle, logged) {
  arguments_assert(arguments, 4);
  ('a program changing ", " in a string of words to " and ": the words joined by ", " named s, search and put named, then the middle lines, then logged written out - let s = "love, joy, peace"; let search = ", "; let put = " and "; ... console.log(t);');
  ('search is handed in, so a wrong program can search for a part of it; put is always " and "');
  let text = list_join(words, ", ");
  let lines = [
    "let s = " + json_to(text) + ";",
    "let search = " + json_to(search) + ";",
    'let put = " and ";',
    ...middle,
    "console.log(" + logged + ");",
  ];
  let code = list_join_newline(lines);
  return code;
}
