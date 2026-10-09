import { text_upper_to } from "./text_upper_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
export function html_document_fake_lambda(lambda) {
  arguments_assert(arguments, 1);
  ("Runs a drawing program with a stand-in for the browser's document in place, so making elements works where there is no browser.");
  ("Whatever was there before is put back even when the drawing throws, because a stand-in left behind would quietly catch drawings meant for a real page.");
  ("The page it stands in for has a body, a head and a top element, all of them empty, because drawing code reaches for those to hang a style sheet or a listener on and a missing one stops the drawing on something nobody was asking about. Nothing is ever found on it: no element answers to a search and no element answers to a name.");
  let before = globalThis.document;
  let fake = {
    createElement: function element_new(tag) {
      "the tag is kept, so a reader can tell a span standing in a line from a row of its own";
      let element = html_element_fake();
      element.tagName = text_upper_to(tag);
      return element;
    },
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
  ("A watcher of element sizes is stood in for as well, one that never reports, because nothing here is ever laid out and so nothing ever changes size. Added 2026-10-05 when the code app's pictures were put in a box that scrolls sideways and watches its own size: every lesson with a picture stopped drawing here on the browser's absence, and drew perfectly on a phone.");
  let observer_before = globalThis.ResizeObserver;
  function observer_fake() {
    let observer = {
      observe: function size_watch() {},
      unobserve: function size_unwatch() {},
      disconnect: function size_stop() {},
    };
    return observer;
  }
  globalThis.document = fake;
  globalThis.ResizeObserver = observer_fake;
  try {
    lambda();
  } finally {
    globalThis.document = before;
    globalThis.ResizeObserver = observer_before;
  }
}
