import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { property_set } from "./property_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_sticky_generic(element, edge) {
  "Keeps one thing in sight against a named edge of the screen while the page scrolls past it, and gives it the page's own colour so what is scrolling does not show through.";
  "The edge is handed in rather than written here because the two edges are the same idea. A bar of controls at the top and a pair of arrows at the bottom both stay put for the same reason - a reader partway down a chapter should not have to scroll to reach the way onward - and writing that twice would let one of them drift.";
  "It stops holding on when the page ends, because it stays a part of the page rather than being pinned to the window. So the last thing a reader scrolling down meets is still the end of the reading and the foot below it, not a strip sitting on top of them.";
  arguments_assert(arguments, 2);
  let background = app_shared_color_page_background();
  let style = {
    position: "sticky",
    "z-index": "1",
    "background-color": background,
  };
  property_set(style, edge, "0");
  html_style_assign(element, style);
}
