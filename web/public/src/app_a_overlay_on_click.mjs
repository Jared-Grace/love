import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
export function app_a_overlay_on_click() {
  function on_click() {
    let o = app_a_overlay(a, on_keydown);
    function on_keydown(e) {
      app_a_on_keydown(e, choices);
    }
  }
  html_on_click(keyword, on_click);
}
