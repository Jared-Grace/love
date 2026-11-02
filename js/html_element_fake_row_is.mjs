import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_element_fake_children_any } from "./html_element_fake_children_any.mjs";
import { and } from "./and.mjs";
export function html_element_fake_row_is(element) {
  arguments_assert(arguments, 1);
  ("Whether a stand-in element holds a row of pieces of its own, rather than being one piece standing in a line: something was appended under it, and it is not a span.");
  ("A span sits inside the line around it on the screen even when it is drawn as pieces - a code chip whose three dots are drawn grey is one chip, if (a) { ... }, not three lines. Added 2026-10-09, when the dots were greyed and a sentence read through such a chip broke in two.");
  let children_any = html_element_fake_children_any(element);
  let tag = element.tagName;
  let right = equal_not(tag, "SPAN");
  let r = and(children_any, right);
  return r;
}
