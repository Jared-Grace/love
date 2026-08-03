import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { equal } from "./equal.mjs";
export function text_brace_depth(text) {
  "How many braces are still open at the end of a piece of writing - none when every one that was opened has been closed. Read-only, pure.";
  "The question a reader has when what it is reading arrived a line at a time and the thing it wants spans several of them. Pretty-printed JSON is exactly that shape: it opens on the line that announced it and closes lines later, so the only way to know the whole of it has arrived is to count.";
  "Counted rather than parsed, because the writing is not JSON yet - it is a complaint with JSON somewhere inside it, and half of one cannot be parsed at all. A brace written inside a piece of text would be counted here as though it opened something, which is a limit worth saying out loud; nothing this reads is written by hand, and what it does read is a machine printing a list of names.";
  let depth = 0;
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  for (let letter of text) {
    let opens = equal(letter, left);
    if (opens) {
      depth = depth + 1;
    }
    let closes = equal(letter, right);
    if (closes) {
      depth = depth - 1;
    }
  }
  return depth;
}
