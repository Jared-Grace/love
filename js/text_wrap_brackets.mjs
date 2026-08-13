import { js_code_bracket_close } from "./js_code_bracket_close.mjs";
import { js_code_bracket_open } from "./js_code_bracket_open.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_wrap_brackets(inside) {
  "Any text with a square bracket put on each end of it.";
  "The sibling of the parenthesis wrapper, and it exists for the same reason that one does - the bracket CHARACTERS are shared with the JS code that writes them, but wrapping something in brackets is not itself a thing about JS. A verse number standing in front of Scripture wants this and is not code.";
  let wrapped = text_combine_multiple([
    js_code_bracket_open(),
    inside,
    js_code_bracket_close(),
  ]);
  return wrapped;
}
