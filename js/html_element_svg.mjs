import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_parent_append } from "./html_parent_append.mjs";
export function html_element_svg(parent, tag_name) {
  "Make an SVG element and put it inside the parent, the same way html_element makes an ordinary one.";
  "It cannot be folded into html_element. A browser decides what a tag MEANS from the namespace it was created in, not from its spelling, so an svg or a path made the ordinary way comes out as an unknown HTML element that occupies no space and draws nothing. There is no attribute that fixes it afterwards; the namespace has to be given at the moment of creation.";
  "It also skips the box-sizing that html_element sets, because that property has no meaning inside a drawing and setting it there only puts a lie in the inspector.";
  let namespace = "http://www.w3.org/2000/svg";
  let e = document.createElementNS(namespace, tag_name);
  let component = html_component_wrap(e);
  html_parent_append(parent, component);
  return component;
}
