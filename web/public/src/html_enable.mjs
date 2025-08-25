import { marker } from "./marker.mjs";
import { html_disable_set } from "./html_disable_set.mjs";
export function html_enable(b) {
  marker("1");
  const disabled = true;
  html_disable_set(b, disabled);
}
