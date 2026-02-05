import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_input(component, lambda) {
  const name_event = "input";
  html_on(component, name_event, lambda);
}
