import { marker } from "../../../love/public/src/marker.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_click(component, lambda) {
  marker("1");
  const name_event = "click";
  html_on(component, name_event, lambda);
}
