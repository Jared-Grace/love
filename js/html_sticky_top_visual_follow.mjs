import { html_component_element_get } from "./html_component_element_get.mjs";
import { math_max } from "./math_max.mjs";
import { not } from "./not.mjs";
export function html_sticky_top_visual_follow(component) {
  "Keeps a thing held against the top of the page against the top of what is actually on the screen.";
  "A thing held against the top is held against the page's own window, and on a phone that window and the part a person can see are not always the same: zoomed in, or while the browser's own bar slides away, the part on show can sit lower than the top of the window, and the top of the held thing is then off the screen. Seen on a phone with the text size turned up, 2026-09-28: the browser's bar slid away, then the first row of the lesson list's bar went with it, and only the gear under it stayed.";
  "The browser says how far down the window the part on show starts, and the thing is held that far down. Where the two agree - every desktop, and a phone that is not zoomed - that is nothing, and nothing changes.";
  "It stops listening once the thing has been taken off the page, because every screen draws a new bar, and a listener left behind for each one would keep them all.";
  "the thing comes as the wrapper every html_ maker hands back, so the element is taken out of it first. Before, the wrapper itself was asked whether it was on the page, it said nothing, and the first scroll took that for gone and stopped listening - so this never moved anything";
  let element = html_component_element_get(component);
  let viewport = window.visualViewport;
  if (not(viewport)) {
    return;
  }
  function follow() {
    if (not(element.isConnected)) {
      viewport.removeEventListener("scroll", follow);
      viewport.removeEventListener("resize", follow);
      return;
    }
    let offset = math_max(0, viewport.offsetTop);
    element.style.top = offset + "px";
  }
  viewport.addEventListener("scroll", follow);
  viewport.addEventListener("resize", follow);
}
