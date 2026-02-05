import { html_disable_set } from "../../../love/public/src/html_disable_set.mjs";
export function html_enable(b) {
  const disabled = false;
  html_disable_set(b, disabled);
}
