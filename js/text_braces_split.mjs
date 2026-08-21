import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function text_braces_split(t) {
  "The writing with its braced asides taken out, and those asides on their own - what somebody wrote, and what they wrote about what they wrote.";
  "NESTING IS COUNTED, so a brace opened inside an aside closes the one it opened rather than ending the aside. Somebody writing a note reaches for braces again inside it without thinking about it, and counting the depth is the difference between taking their note out and taking out half of it, leaving the tail of it sitting in the sentence as though it were part of it.";
  "AN UNCLOSED BRACE TAKES THE REST WITH IT. There is nothing else it could mean, and the alternative - handing the text back as though the brace were ordinary writing - returns a sentence with a stray brace in it and calls it clean.";
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let text = "";
  let braced = [];
  let note = "";
  let depth = 0;
  for (let letter of t) {
    let opens = equal(letter, left);
    let closes = equal(letter, right);
    let outside = equal(depth, 0);
    if (outside) {
      if (opens) {
        depth = 1;
        continue;
      }
      text = text_combine(text, letter);
      continue;
    }
    if (opens) {
      depth = add(depth, 1);
    }
    if (closes) {
      depth = subtract(depth, 1);
    }
    let ended = equal(depth, 0);
    if (ended) {
      list_add(braced, note);
      note = "";
      continue;
    }
    note = text_combine(note, letter);
  }
  let b = equal(depth, 0);
  let unclosed = not(b);
  if (unclosed) {
    list_add(braced, note);
  }
  let r = {
    text,
    braced,
  };
  return r;
}
