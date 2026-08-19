import { arguments_assert } from "./arguments_assert.mjs";
import { js_comment_start } from "./js_comment_start.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_comment_line(words) {
  arguments_assert(arguments, 1);
  ("one line of a program that is a note for a person: the two slashes, and then the words");
  ("A space is put between the slashes and the words. The language does not ask for one, and without it the slashes and the first word arrive as a single run of symbols - which is the one thing a learner meeting a note for the first time must be able to tell apart.");
  let slashes = js_comment_start();
  let space = " ";
  let line = text_combine_multiple([slashes, space, words]);
  return line;
}
