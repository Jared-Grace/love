import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_click(component, lambda) {
  const name_event = "pointerdown";
  html_on(component, name_event, lambda);
}
