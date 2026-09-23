import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
import { html_on_resize } from "./html_on_resize.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
export function html_bottom_when_short(component) {
  "puts the last thing on a page at the bottom of the screen when the page is too short to reach there, and leaves it where it is - at the end of the reading - when the page is longer.";
  "It is not held against the bottom of the screen. A thing held there is in sight the whole time, covering a strip of every screenful; this is met at the end, like the last line of a letter. It only stops the end of a short page from leaving it floating partway up an otherwise empty screen.";
  "The push is room left above it, worked out afresh each time: taken away first, then the page is measured, then the room still missing between the end of the page and the bottom of the screen is put back. Measured with the push already in, the page would count its own room as reading and never give any of it back when the reading grew.";
  "The page that scrolls may be the whole window or a box held to one window with the reading scrolling inside it. Inside such a box the end of the page is the end of what is in the box, and the bottom of the screen is the bottom of the box.";
  "It looks again when the window changes size, when the page does, and when anything beside it in the page does - which is how it hears about the reading in a box growing, since the box itself stays the size of the window. It stops looking once it has been taken off the page.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(component);
  let selector = "[" + html_scroll_body_attribute_name() + "]";
  let removes = [];
  removes.push(html_on_resize(update));
  let page = html_component_wrap(document.documentElement);
  removes.push(html_on_size_change(page, update));
  let parent = element.parentElement;
  for (let sibling of parent.children) {
    if (sibling === element) {
      continue;
    }
    let wrapped = html_component_wrap(sibling);
    removes.push(html_on_size_change(wrapped, update));
  }
  function update() {
    if (!element.isConnected) {
      for (let remove of removes) {
        remove();
      }
      return;
    }
    element.style.paddingTop = "0px";
    let box = element.closest(selector);
    let missing;
    if (box === null) {
      let root = document.documentElement;
      let height = root.getBoundingClientRect().height;
      missing = window.innerHeight - height;
    } else {
      let box_rect = box.getBoundingClientRect();
      let rect = element.getBoundingClientRect();
      let bottom = rect.bottom - box_rect.top + box.scrollTop;
      let padding = parseFloat(getComputedStyle(box).paddingBottom);
      missing = box.clientHeight - bottom - padding;
    }
    let push = Math.max(0, missing);
    element.style.paddingTop = push + "px";
  }
}
