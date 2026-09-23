import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on_resize } from "./html_on_resize.mjs";
import { html_on_size_change } from "./html_on_size_change.mjs";
import { html_connected_is } from "./html_connected_is.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_fixed_bottom_over_spacer(spacer, row) {
  "pins one element to the bottom of the window, lined up over the spot another element holds in the page - so it is at the very bottom of the screen on a page too short to reach there, and still lined up with the column it belongs to.";
  "Holding something to the bottom from inside the page only works while the page reaches past the bottom of the screen; on a short page it sits right under the last line, partway up. Pinning it to the window puts it at the bottom whatever the page's length.";
  "A thing pinned to the window takes no room in the page, so the last lines of a long page would scroll up underneath it and never come out. The spacer stays in the page at the row's own height, so there is always room at the end for the reading to clear it.";
  "The row takes its left edge and its width from the spacer rather than from the window, so whatever lines the spacer up with a reading column lines the row up too, and nothing that does the lining up has to know the row is pinned.";
  "It looks again whenever the window changes size or either element does, and stops looking once the spacer has been taken off the page.";
  arguments_assert(arguments, 2);
  html_style_assign(row, {
    position: "fixed",
    bottom: "0",
    "z-index": "1",
    "box-sizing": "border-box",
  });
  let remove_resize = html_on_resize(update);
  let remove_spacer = html_on_size_change(spacer, update);
  let remove_row = html_on_size_change(row, update);
  function update() {
    let b = html_connected_is(spacer);
    if (not(b)) {
      remove_resize();
      remove_spacer();
      remove_row();
      return;
    }
    let rect = html_bounding_client_rect(spacer);
    let row_element = html_component_element_get(row);
    let height = row_element.offsetHeight;
    html_style_assign(row, {
      left: rect.left + "px",
      width: rect.width + "px",
    });
    html_style_assign(spacer, {
      height: height + "px",
    });
  }
}
