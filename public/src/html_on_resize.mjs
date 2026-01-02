import { html_on_window } from "../../../love/public/src/html_on_window.mjs";
export function html_on_resize(lambda) {
  html_on_window("resize", lambda);
}
