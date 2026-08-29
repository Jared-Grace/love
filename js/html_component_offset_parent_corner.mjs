import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_component_offset_parent_corner(component) {
  arguments_assert(arguments, 1);
  ("Where the thing that positions a component sits inside whatever that thing is placed in - its top left corner, in pixels.");
  ("A coordinate written on a component is counted from the corner of whatever positions it, and that need not be the corner of the box that scrolls. A wrapper may hold empty room around a grid so that the outermost square can still be brought to the middle of the window, and every one of those blank pixels sits between the two corners. Measured and handed back, so a caller can add it rather than assume it away.");
  ("Measured rather than remembered, because it moves. Resizing the squares resizes the grid, and a grid centred inside room that did not change size is a grid whose corner has moved without anybody being told.");
  ("No such thing gives a corner of nothing rather than an answer of its own, which is the honest reading: a component that nothing positions is counted from the corner of the page, and the corner of the page is where zero already points. The case is real - a component drawn nowhere has no positioning parent at all - and a caller adding zero is a caller left exactly where it started.");
  let element = html_component_element_get(component);
  let parent = element.offsetParent;
  let left = 0;
  let top = 0;
  if (parent) {
    left = parent.offsetLeft;
    top = parent.offsetTop;
  }
  let corner = {
    left,
    top,
  };
  return corner;
}
