import { round } from "./round.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function html_offscreen_report() {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "everything drawn on this page that has fallen off the screen and cannot be scrolled back to. runs inside the page itself, so it reads the sizes the browser actually settled on rather than the ones the code asked for - which is the only way to catch a size that was fine on a laptop and too big on a phone";
  "off the TOP and off the LEFT are always reported, because scrolling only ever moves forwards from nothing: there is no way to reach above the first line or left of the first column, so anything there is simply gone and nothing on the screen says so";
  "off the BOTTOM and off the RIGHT are reported only when nothing can be scrolled to reach them. content below the fold of a page that scrolls is not a fault, it is a page";
  let width = window.innerWidth;
  let height = window.innerHeight;
  let found = [];
  let selector =
    "body p, body span, body button, body h1, body h2, body h3, body li, body td";
  let all = document.querySelectorAll(selector);
  function scrollable(element, forward, along_y) {
    if (not(forward)) {
      return false;
    }
    let node = element;
    while (node) {
      let style = window.getComputedStyle(node);
      let flow = along_y ? style.overflowY : style.overflowX;
      let scrolls =
        equal(flow, "auto") || equal(flow, "scroll") || equal(flow, "overlay");
      let inner = along_y ? node.scrollHeight : node.scrollWidth;
      let outer = along_y ? node.clientHeight : node.clientWidth;
      if (scrolls && greater_than(inner, outer + 1)) {
        return true;
      }
      node = node.parentElement;
    }
    let page = document.documentElement;
    let inner_page = along_y ? page.scrollHeight : page.scrollWidth;
    let outer_page = along_y ? page.clientHeight : page.clientWidth;
    let g = greater_than(inner_page, outer_page + 1);
    return g;
  }
  for (let element of all) {
    let rect = element.getBoundingClientRect();
    if (less_than(rect.width, 1) || less_than(rect.height, 1)) {
      continue;
    }
    let style = window.getComputedStyle(element);
    if (equal(style.visibility, "hidden") || equal(style.display, "none")) {
      continue;
    }
    if (equal(style.opacity, "0")) {
      continue;
    }
    let text = element.textContent.trim();
    if (less_than(text.length, 1)) {
      continue;
    }
    let edges = [];
    if (less_than(rect.top, -1)) {
      edges.push("top");
    }
    if (less_than(rect.left, -1)) {
      edges.push("left");
    }
    if (
      greater_than(rect.bottom, height + 1) &&
      not(scrollable(element, true, true))
    ) {
      edges.push("bottom");
    }
    if (
      greater_than(rect.right, width + 1) &&
      not(scrollable(element, true, false))
    ) {
      edges.push("right");
    }
    if (less_than(edges.length, 1)) {
      continue;
    }
    found.push({
      tag: element.tagName.toLowerCase(),
      text: text.slice(0, 60),
      edges,
      top: round(rect.top),
      left: round(rect.left),
      bottom: round(rect.bottom),
      right: round(rect.right),
      width: round(rect.width),
      height: round(rect.height),
    });
  }
  return found;
}
