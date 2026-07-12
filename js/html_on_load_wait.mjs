import { promise_wrap } from "./promise_wrap.mjs";
import { html_on_load } from "./html_on_load.mjs";
export async function html_on_load_wait() {
  function lambda(resolve, reject) {
    if (document.readyState === "complete") {
      resolve();
    } else {
      html_on_load(resolve);
    }
  }
  let p = await promise_wrap(lambda);
}
