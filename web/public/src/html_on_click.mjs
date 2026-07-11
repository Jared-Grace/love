import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_click(component, lambda) {
  let name_event = "click";
  html_on(component, name_event, lambda);
}
