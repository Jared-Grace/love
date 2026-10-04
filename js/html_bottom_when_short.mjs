import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
import { html_on_resize } from "./html_on_resize.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { math_max } from "./math_max.mjs";
export function html_bottom_when_short(component) {
  "puts the last thing on a page at the bottom of the screen when the page is too short to reach there, and leaves it where it is - at the end of the reading - when the page is longer.";
  "It is not held against the bottom of the screen. A thing held there is in sight the whole time, covering a strip of every screenful; this is met at the end, like the last line of a letter. It only stops the end of a short page from leaving it floating partway up an otherwise empty screen.";
  "The push is room left above it, worked out afresh each time: taken away first, then the page is measured, then the room still missing between the end of the page and the bottom of the screen is put back. Measured with the push already in, the page would count its own room as reading and never give any of it back when the reading grew.";
  "The page that scrolls may be the whole window or a box held to one window with the reading scrolling inside it. Inside such a box the end of the page is the end of what is in the box, and the bottom of the screen is the bottom of the box.";
  "It looks again when the window changes size, when the page does, and when anything beside it in the page does or is added - which is how it hears about the reading in a box growing, since the box itself stays the size of the window. It stops looking once it has been taken off the page.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(component);
  let selector = "[" + html_scroll_body_attribute_name() + "]";
  let removes = [];
  let remove2 = html_on_resize(update);
  removes.push(remove2);
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
  removes.push(observer_stop);
  function update() {
    if (not(element.isConnected)) {
      for (let remove of removes) {
        remove();
      }
      return;
    }
    element.style.paddingTop = "0px";
    let box = element.closest(selector);
    let missing = null;
    if (equal(box, null)) {
      let root = document.documentElement;
      let height = root.getBoundingClientRect().height;
      missing = subtract(window.innerHeight, height);
    } else {
      let box_rect = box.getBoundingClientRect();
      let rect = element.getBoundingClientRect();
      let bottom = subtract(rect.bottom, box_rect.top) + box.scrollTop;
      let padding = parseFloat(getComputedStyle(box).paddingBottom);
      let left = subtract(box.clientHeight, bottom);
      missing = subtract(left, padding);
    }
    let push = math_max(0, missing);
    element.style.paddingTop = push + "px";
  }
}
