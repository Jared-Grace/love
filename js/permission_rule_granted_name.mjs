import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_empty } from "./text_empty.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function permission_rule_granted_name(rule) {
  "the dispatcher function a generated allow rule grants, or empty text when the rule grants something else";
  "the generated rules are the only ones shaped `Bash(node <script> <fn>:*)`, and the function is always the last word, which is what lets the two families - the plain seam and the four-word commit command - be read by one reader";
  "read rather than remembered, because the file on disk is the only record of what was granted before a rename moved the list out from under it, and a name that has departed exists nowhere else by then";
  let opening = "Bash(node ";
  let closing = ":*)";
  let inner = text_wrapped_inner(rule, opening, closing);
  let words = inner.split(" ");
  let last = subtract(words.length, 1);
  let f_name = words[last];
  return f_name;
}
