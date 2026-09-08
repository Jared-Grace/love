import { arguments_assert } from "./arguments_assert.mjs";
import { html_element_offscreen } from "./html_element_offscreen.mjs";
import { noop } from "./noop.mjs";
export function html_document_offscreen_ensure() {
  arguments_assert(arguments, 0);
  ("put a page with no screen behind it in place of the one a browser would have given, so that drawing code can be run here; says whether it had to");
  ("Nothing is put in place if something is already there, so this is safe to ask for twice and safe to ask for in a browser, where the real one wins and this does nothing at all.");
  ("The page itself is only a maker of elements plus the two elements the drawing reaches for by name - the head, which the font include hangs a stylesheet on, and the body. Both of those are real off-screen elements rather than nothing, because the code that reaches for them appends to what it finds and appending to nothing throws.");
  ("A window is put up beside it for the same reason and with the same thinness. Nothing here is meant to behave like a browser; it is meant to let the drawing finish so that what it drew can be read.");
  let already = globalThis.document;
  if (already) {
    return false;
  }
  function text_node_new(writing) {
    let node = html_element_offscreen("#text");
    node.innerHTML = writing;
    return node;
  }
  function nothing_get() {
    return null;
  }
  globalThis.document = {
    createElement: html_element_offscreen,
    createTextNode: text_node_new,
    head: html_element_offscreen("head"),
    body: html_element_offscreen("body"),
    documentElement: html_element_offscreen("html"),
    getElementById: nothing_get,
    querySelector: nothing_get,
    querySelectorAll: nothing_get,
    addEventListener: noop,
  };
  globalThis.window = {
    addEventListener: noop,
    removeEventListener: noop,
    location: {
      href: "",
      hash: "",
      search: "",
    },
  };
  return true;
}
