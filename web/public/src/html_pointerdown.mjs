import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_pointerdown(c) {
  marker("1");
  let element = html_component_element_get(c);
  element.dispatchEvent(
    new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
    }),
  );
}
