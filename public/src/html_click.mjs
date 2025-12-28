import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_click(c) {
  let element = html_component_element_get(c);
  element.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
    }),
  );
}
