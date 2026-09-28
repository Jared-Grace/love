import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_set } from "./html_display_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_shown_when_under_bar(shown, watched, bar) {
  arguments_assert(arguments, 3);
  ("shows shown only while watched has scrolled up under bar, the bar held at the top of the window, so a copy of a thing rides the bar exactly when the thing itself cannot be seen");
  ("Compared against the bottom of the bar rather than the top of the window, because the bar covers the top of the window, and a thing slid under it is just as hidden as one scrolled past the top.");
  ("Read on every scroll and resize rather than watched by an IntersectionObserver, because the bar is measured before anything is put in it and its height is only known once the page is drawn; asked again each time, it is always the bar's height now.");
  ("Once watched has left the page, the screen has been drawn again and a new one is watching; this one then stops listening.");
  ("Hidden to begin with, which is right on a page that opens at the top, where watched is in plain view. Shown again by clearing the display rather than naming one, so it goes back to whatever its own style says.");
  html_display_set(shown, "none");
  function update() {
    let element = html_component_element_get(watched);
    if (not(element.isConnected)) {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      return;
    }
    let bottom = element.getBoundingClientRect().bottom;
    let bar_bottom =
      html_component_element_get(bar).getBoundingClientRect().bottom;
    let under = less_than_equal(bottom, bar_bottom);
    html_display_set(shown, under ? "" : "none");
  }
  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
}
