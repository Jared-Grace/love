import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_comment_line } from "./js_code_comment_line.mjs";
import { text_empty } from "./text_empty.mjs";
export function js_code_comment_prefix() {
  arguments_assert(arguments, 0);
  ("what a note line begins with before its words: the two slashes and the space after them");
  ("It is asked of the function that builds a note line rather than spelled again, by asking it for a note with no words in it. Spelled a second time, a screen could put the space in and a reader take it out again, and a line would come back not quite the line that went in - with nothing to say which of the two spellings was the one meant.");
  let nothing = text_empty();
  let prefix = js_code_comment_line(nothing);
  return prefix;
}
