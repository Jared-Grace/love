import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_center_offset } from "./html_scroll_center_offset.mjs";
export function html_scroll_center_container_settled(component, container) {
  "Scrolls a box so that one thing already drawn inside it sits in the middle, measured and done in the same breath, with no frame waited for and no gliding.";
  "IT WAITS FOR NOTHING BECAUSE THERE IS NOTHING LEFT TO WAIT FOR. The other members of this family were written for a map whose squares are being resized as the camera travels, so they let two animation frames pass before measuring; a page of finished text has settled long before anybody presses anything, and the waiting there buys an answer that was already true.";
  "THE WAITING IS NOT MERELY WASTED, IT REORDERS. Every wait is raced against a timer, and a browser that has put the page in the background stretches those timers out - so two presses in quick succession become two waits that can finish the wrong way round, and the reader is left at the change they asked for first. Measured on the arcs bench: six presses in a row ended with the panel standing at the fiftieth change while the press said the second. Done in one breath the two cannot swap, because the second press cannot begin until the first has finished.";
  "IT MOVES DOWN THE PAGE AND NOT ACROSS IT. Left is deliberately not asked for, so a box that has never scrolled sideways stays where it is; the sum for it is meaningful only where there is somewhere sideways to go, and asking for it on a column of text nudges the words a pixel or two for nothing.";
  "THE SUM ITSELF IS SHARED WITH THE WAITING MEMBERS OF THE FAMILY, and only the choosing of one direction is left here. What separates this one from them was never the arithmetic - it is the waiting, and the arithmetic had been copied along with the difference.";
  arguments_assert(arguments, 2);
  let element = html_component_element_get(component);
  let container_e = html_component_element_get(container);
  let container_box = container_e.getBoundingClientRect();
  let box = element.getBoundingClientRect();
  let top = html_scroll_center_offset(
    container_e.scrollTop,
    box.top,
    container_box.top,
    container_e.clientHeight,
    box.height,
  );
  let s = {
    top,
    behavior: "auto",
  };
  container_e.scrollTo(s);
}
