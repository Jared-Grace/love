import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function html_element_fake_texts(element) {
  arguments_assert(arguments, 1);
  ("Every piece of writing put into a stand-in element and into everything appended under it, one entry per element that holds any, in the order it was drawn.");
  ("A list, not one joined text, so a finding can say which piece of the screen it is in. Joined, the pieces of one line run together with nothing between them, and a phrase could seem to cross from one piece into the next.");
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
