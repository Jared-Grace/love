import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
export function html_viewport_readout_scroll_box(round_to) {
  "one line for the readout about the box a page scrolls its reading inside, when the page has one: how far down it is scrolled, how tall what it holds is, how tall the box is, and the four things in it that end lowest";
  "made for a chapter on a phone that scrolled into a whole screen of blank, 2026-10-04. The page itself was exactly one window tall, so the window's numbers said nothing - the blank was inside the box, and only the box's own numbers can say what is taking up that room";
  let selector = "[" + html_scroll_body_attribute_name() + "]";
  let box = document.querySelector(selector);
  if (equal(box, null)) {
    let r = "scroll box none";
    return r;
  }
  let parts = [
    "scroll box top " + round_to(box.scrollTop),
    "height " + box.scrollHeight,
    "client " + box.clientHeight,
  ];
  let items = [];
  for (let child of box.children) {
    let bottom = child.offsetTop + child.offsetHeight;
    items.push({
      child,
      bottom,
    });
  }
  function lowest_first(a_inner, b_inner) {
    let difference = subtract(b_inner.bottom, a_inner.bottom);
    return difference;
  }
  items.sort(lowest_first);
  for (let item of items.slice(0, 4)) {
    let child = item.child;
    parts.push(
      "\n  " +
        child.tagName +
        " top " +
        child.offsetTop +
        " height " +
        child.offsetHeight +
        " pad " +
        getComputedStyle(child).paddingTop +
        " " +
        child.textContent.slice(0, 30),
    );
  }
  let r2 = parts.join(" ");
  return r2;
}
