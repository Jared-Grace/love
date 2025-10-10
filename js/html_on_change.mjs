import { marker } from "../../../love/public/src/marker.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_change(component, lambda) {
  marker("1");
  const name_event = "change";
  html_on(component, name_event, lambda);
}
