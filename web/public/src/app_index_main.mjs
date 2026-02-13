import { app_html_open } from "../../../love/public/src/app_html_open.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_index_main(context) {
  async function lambda2() {
    await app_html_open(a_name);
  }
  let component = html_button(parent, text, lambda2);
}
