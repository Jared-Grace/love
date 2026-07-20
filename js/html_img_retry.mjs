import { html_img } from "./html_img.mjs";
import { html_on } from "./html_on.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { positive_is } from "./positive_is.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_img_retry(body, src) {
  "an <img> that RE-REQUESTS its src (a few times, spaced out) if a load ERRORS — a safety net for the dev server's HTTP/1.1 6-connection cap, where a sprite request can drop under a reload flood. each retry appends a changing ?retry= so the browser actually re-fetches rather than reusing the errored request. harmless in prod (HTTP/2 multiplexed → the error won't fire)";
  let component = html_img(body, src);
  let tries = { left: 3 };
  function on_error() {
    let n = tries.left;
    if (positive_is(n)) {
      tries.left = subtract_1(n);
      function reload() {
        let bust = text_combine_multiple([src, "?retry=", n]);
        html_src_set(component, bust);
      }
      setTimeout(reload, 500);
    }
  }
  html_on(component, "error", on_error);
  return component;
}
