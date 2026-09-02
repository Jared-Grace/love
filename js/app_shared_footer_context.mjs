import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_connected_is } from "./html_connected_is.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_footer_context(context) {
  "a screen-based app clears its whole page on every navigation, so the foot of the page has to be re-added once each screen has drawn. Hand this to a context as its after-render hook and every screen ends with the footer.";
  "Where the screen filled the window with a frame of its own - a bar, and a body under it that scrolls - the foot goes INSIDE that frame rather than after it. Added after it the foot stood below the bottom edge of the window, because the frame had already been given the whole height: two buttons that are no part of the reading could only be reached by scrolling the page itself, on a screen with hardly anything on it. Added inside, the scrolling body gives up exactly the height the foot asks for, so the foot is there from the first moment and the reading scrolls only when it really is longer than the room left.";
  "A frame belongs to the render that built it, and the next render empties the page, so a frame remembered from before is asked whether it is still on the page rather than trusted. A screen that draws no frame of its own leaves the last one detached, and the foot goes back under the page root, which is where it has always gone.";
  let root = property_get(context, "root");
  let shell = property_get_or_null(context, "shell");
  let remembered = null_not_is(shell);
  let framed = false;
  if (remembered) {
    framed = html_connected_is(shell);
  }
  let parent = root;
  if (framed) {
    parent = shell;
  }
  ("two renders can overlap — a slow screen may still be loading when the next render clears the page — so take away the foot the previous render left before adding this one, and the reader never sees it offered twice");
  let previous = property_get_or_null(context, "footer");
  let had_previous = null_not_is(previous);
  if (had_previous) {
    html_remove(previous);
  }
  let footer = app_shared_footer(parent);
  if (framed) {
    ("a row of the frame that keeps its own height, the same way the bar along the top does, so the scrolling body is what gives way to it");
    html_style_flex(footer, "0 0 auto");
  }
  property_set(context, "footer", footer);
  return footer;
}
