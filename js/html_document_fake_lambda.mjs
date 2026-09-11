import { arguments_assert } from "./arguments_assert.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
export function html_document_fake_lambda(lambda) {
  arguments_assert(arguments, 1);
  ("Runs a drawing program with a stand-in for the browser's document in place, so making elements works where there is no browser.");
  ("Whatever was there before is put back even when the drawing throws, because a stand-in left behind would quietly catch drawings meant for a real page.");
  ("The page it stands in for has a body, a head and a top element, all of them empty, because drawing code reaches for those to hang a style sheet or a listener on and a missing one stops the drawing on something nobody was asking about. Nothing is ever found on it: no element answers to a search and no element answers to a name.");
  let before = globalThis.document;
  let fake = {
    createElement: html_element_fake,
    createTextNode: function text_node_new(words) {
      let node = {
        textContent: words,
      };
      return node;
    },
    body: html_element_fake(),
    head: html_element_fake(),
    documentElement: html_element_fake(),
    getElementById: function named_find() {
      return null;
    },
    querySelector: function one_find() {
      return null;
    },
    querySelectorAll: function every_find() {
      let r = [];
      return r;
    },
    addEventListener: function listener_add() {},
    removeEventListener: function listener_remove() {},
  };
  globalThis.document = fake;
  try {
    lambda();
  } finally {
    globalThis.document = before;
  }
}
