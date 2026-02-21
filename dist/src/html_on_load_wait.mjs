import { promise_wrap } from "../../../love/public/src/promise_wrap.mjs";
import { html_on_load } from "../../../love/public/src/html_on_load.mjs";
export async function html_on_load_wait() {
  function lambda4(resolve, reject) {
    if (document.readyState === "complete") {
      resolve();
    } else {
      html_on_load(resolve);
    }
  }
  let p = await promise_wrap(lambda4);
}
