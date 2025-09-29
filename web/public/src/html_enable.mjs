import { marker } from "../../../love/public/src/marker.mjs";
import { html_disable_set } from "../../../love/public/src/html_disable_set.mjs";
export function html_enable(b) {
  marker("1");
  const disabled = false;
  html_disable_set(b, disabled);
}
