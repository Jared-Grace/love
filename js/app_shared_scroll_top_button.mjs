import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_scroll_top_window } from "./html_scroll_top_window.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_on_scroll } from "./html_on_scroll.mjs";
import { html_on_resize } from "./html_on_resize.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
import { html_connected_is } from "./html_connected_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_shared_scroll_top_button(parent) {
  "a small button that takes the page back to its beginning - there only while the page is long enough to scroll, and switched off while the page is already at its beginning.";
  "On a page that fits the screen there is nowhere for it to go, so it is not drawn at all: a button that can never do anything is one more thing to read.";
  "At the beginning of a page that does scroll it is faded rather than taken away, so the row it stands in keeps its shape as the reader starts to scroll, and the reader can see it waiting for when they have gone down.";
  "It looks again whenever the window scrolls, changes size, or the page itself grows or shrinks, since each of those can move a page between fitting the screen and not. It stops looking once it has been taken off the page, because a screen that draws itself again builds a new one.";
  arguments_assert(arguments, 1);
  let text_up = emoji_arrow_up();
  let button = app_shared_button(parent, text_up, html_scroll_top_window);
  let page = html_component_wrap(document.documentElement);
  let w = html_component_wrap(window);
  let remove_scroll = html_on_scroll(w, update);
  let remove_resize = html_on_resize(update);
  let remove_size = html_on_size_change(page, update);
  function update() {
    let b = html_connected_is(button);
    if (not(b)) {
      remove_scroll();
      remove_resize();
      remove_size();
      return;
    }
    let root = document.documentElement;
    let scrollable = greater_than(root.scrollHeight, window.innerHeight);
    let display = scrollable ? "" : "none";
    html_style_set(button, "display", display);
    let top = less_than_equal(window.scrollY, 0);
    app_shared_button_disabled_set(button, top);
  }
  ("No first look is taken here by hand: the row may not be on the page yet, and a button not on the page would stop looking before it had begun. The page's size is reported once as soon as it is watched, after the row has gone in, and that report is the first look.");
  return button;
}
