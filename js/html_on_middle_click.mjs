import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_on } from "./html_on.mjs";
export function html_on_middle_click(component, lambda) {
  arguments_assert(arguments, 2);
  ("lambda run when component is pressed with the middle button - which never fires a click, only an auxclick, so a button that is not a link otherwise does nothing at all when middle-clicked. BESPOKE (event fields) — do NOT auto-canonicalize");
  ("The press itself is stopped from doing the browser's own thing, which over a page is to start scrolling it by moving the mouse - the reader asked for a tab, not a scroll.");
  function down(event) {
    if (equal(event.button, 1)) {
      event.preventDefault();
    }
  }
  function up(event) {
    if (equal(event.button, 1)) {
      event.preventDefault();
      lambda();
    }
  }
  html_on(component, "mousedown", down);
  html_on(component, "auxclick", up);
}
