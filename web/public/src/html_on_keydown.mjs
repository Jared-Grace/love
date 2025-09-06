import { marker } from "./marker.mjs";
import { html_on } from "./html_on.mjs";
export function html_on_keydown(component, lambda) {
  marker("1");
  const name_event = "click";
  html_on(component, name_event, lambda);
}
