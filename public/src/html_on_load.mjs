import { html_on_window } from "../../../love/public/src/html_on_window.mjs";
export function html_on_load(lambda) {
  const name = "load";
  html_on_window(name, lambda);
}
