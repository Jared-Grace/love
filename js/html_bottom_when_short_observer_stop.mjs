import { arguments_assert } from "./arguments_assert.mjs";
import { html_on_resize } from "./html_on_resize.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
import { equal } from "./equal.mjs";
export function html_bottom_when_short_observer_stop(update, removes, element) {
  arguments_assert(arguments, 3);
  let remove = html_on_resize(update);
  removes.push(remove);
  let page = html_component_wrap(document.documentElement);
  let remove3 = html_on_size_change(page, update);
  removes.push(remove3);
  let parent = element.parentElement;
  function sibling_watch(sibling) {
    if (equal(sibling, element)) {
      return;
    }
    let wrapped = html_component_wrap(sibling);
    let remove4 = html_on_size_change(wrapped, update);
    removes.push(remove4);
  }
  for (let sibling of parent.children) {
    sibling_watch(sibling);
  }
  ("Anything put beside it AFTER it is watched as well, and its arrival is itself a reason to look again. A chapter's foot is made before the verses, so when it was watched only through what stood beside it at the start, it measured a page with nothing on it yet, pushed itself a whole screen down, and never heard the verses arrive - the box they went into stays the size of the window, and the window did not change. Measured on a phone 2026-10-04: a push of 918 in a box 968 tall, under a chapter three screens long, so the end of every chapter was a screen of blank.");
  function added(records) {
    for (let record of records) {
      for (let node of record.addedNodes) {
        if (node instanceof Element) {
          sibling_watch(node);
        }
      }
    }
    requestAnimationFrame(update);
  }
  let observer = new MutationObserver(added);
  observer.observe(parent, {
    childList: true,
  });
  function observer_stop() {
    observer.disconnect();
  }
  return observer_stop;
}
