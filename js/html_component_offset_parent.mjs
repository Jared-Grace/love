import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_component_offset_parent(component) {
  arguments_assert(arguments, 1);
  ("The thing that positions a component, handed back as a component of its own.");
  ("Its twin next door answers where that thing SITS, which is the question every sum about");
  ("a coordinate asks. This one answers which thing it IS, which is the question asked by");
  ("anything that wants to draw on it - scale the whole grid a player is standing on, say,");
  ("rather than move the square she is standing on.");
  ("Everything written on a coordinate is counted from this element's corner, so it is also");
  ("the one element a scale may be written on without moving anything relative to anything");
  ("else. Scaled anywhere else - a wrapper holding blank room around the grid - the blank");
  ("room scales too and every square lands somewhere the sums do not expect.");
  ("A component that nothing positions is handed back as itself. It is counted from the");
  ("corner of the page, and drawing on it is drawing on the frame those coordinates are");
  ("already measured in.");
  let element = html_component_element_get(component);
  let parent = element.offsetParent;
  if (parent) {
    let c = html_component_wrap(parent);
    return c;
  }
  return component;
}
