import { promise_wrap } from "./promise_wrap.mjs";
import { html_on } from "./html_on.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export async function html_img_load_wait(component) {
  "resolve when THIS one image has finished loading (or errored) — so a caller that only needs this image, such as centering the view on the player, can proceed without waiting on the window 'load' event, which every other sprite on the page can hold up. a short timeout guards against an image that never settles";
  let element = html_component_element_get(component);
  function lambda(resolve, reject) {
    if (element.complete) {
      resolve();
    } else {
      html_on(component, "load", resolve);
      html_on(component, "error", resolve);
      setTimeout(resolve, 3000);
    }
  }
  let p = await promise_wrap(lambda);
}
