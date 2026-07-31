import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split } from "./text_split.mjs";
import { list_last } from "./list_last.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function js_comment_own_line_is(code, comment) {
  "Whether a comment has its line to itself, with nothing but blank space in front of it. Those are the ones that can simply become a statement standing in the same place. A comment sitting after code on the same line would have to move somewhere to survive, and choosing where is a judgement no rule makes well - so those are left alone and counted as work for a person.";
  let line_is = property_equals(comment, "type", "Line");
  if (not(line_is)) {
    return false;
  }
  let start = property_get(comment, "start");
  let before = text_slice(code, 0, start);
  let lines = text_split(before, "\n");
  let last = list_last(lines);
  let trimmed = text_trim(last);
  let own = text_empty_is(trimmed);
  return own;
}
