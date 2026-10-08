import { list_any } from "./list_any.mjs";
import { html_element_fake_children_any } from "./html_element_fake_children_any.mjs";
import { html_element_fake_text } from "./html_element_fake_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function html_element_fake_lines(element) {
  arguments_assert(arguments, 1);
  ("Every line of writing drawn into a stand-in element, in the order it was drawn. A line is an element nothing under it has anything appended under it - a row of pieces, or one piece by itself - read back whole, its pieces joined as they stand on the screen.");
  ("A list of lines, not one text, so a finding can say which line of the screen it is in; and lines, not pieces, because one sentence is drawn as several pieces - the first then a code chip then row - and a piece read alone ends where the sentence does not. Measured 2026-10-08: read piece by piece, seven of twenty findings were an ordinal whose noun stood in the next piece.");
  let r = [];
  function walk(e) {
    let children = property_get(e, "children");
    let nested = list_any(children, html_element_fake_children_any);
    if (nested) {
      each(children, walk);
      return;
    }
    let line = html_element_fake_text(e);
    let written = text_empty_not_is(line);
    if (written) {
      list_add(r, line);
    }
  }
  walk(element);
  return r;
}
