import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_styles_inline_restore_later(component) {
  "the inline styles of a component and of everything inside it as they are now, handed back as a function that puts them back as they are now - so a look laid over something for a while can be taken off without knowing how it was laid on";
  "Not picked: an undo written for each look, which would have to know every property that look sets and be changed whenever the look is; what is saved here is whatever was there, so nothing the look does can be missed";
  let element = html_component_element_get(component);
  let elements = [element, ...element.querySelectorAll("*")];
  function lambda(e) {
    let r = [e, e.style.cssText];
    return r;
  }
  let saved = elements.map(lambda);
  function restore() {
    for (let [e, text] of saved) {
      e.style.cssText = text;
    }
  }
  return restore;
}
