import { window_open } from "../../../love/public/src/window_open.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_index_main(context) {
  async function lambda2() {
    window_open(url);
  }
  let component = html_button(parent, text, lambda2);
}
