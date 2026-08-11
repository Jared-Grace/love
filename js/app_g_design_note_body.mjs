import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export function app_g_design_note_body(text) {
  arguments_assert(arguments, 1);
  ("the note text with its leading YAML frontmatter (--- name/description/metadata ---) removed: that block is already shown as the card's header and description, so rendering it again as a paragraph is noise. only strips a fence at the very top; a note without one is returned unchanged.");
  let fence = "---";
  let left = text.slice(0, 3);
  let starts_fenced = equal(left, fence);
  if (not(starts_fenced)) {
    return text;
  }
  let close = text.indexOf("\n---", 3);
  if (equal(close, -1)) {
    return text;
  }
  let sum = add(close, 1);
  let line_end = text.indexOf("\n", sum);
  if (equal(line_end, -1)) {
    let r = "";
    return r;
  }
  let body_start = add(line_end, 1);
  let r3 = text.slice(body_start);
  return r3;
}
