import { promise_wrap } from "./promise_wrap.mjs";
import { html_on_load } from "./html_on_load.mjs";
export async function html_on_load_wait() {
  "resolve when the page has finished loading — but NEVER hang forever: fall back after a few seconds if the window 'load' event is held up by slow or pending resources (e.g. many sprite images), so startup can't get stuck at loading";
  function lambda(resolve, reject) {
    if (document.readyState === "complete") {
      resolve();
    } else {
      html_on_load(resolve);
      setTimeout(resolve, 3000);
    }
  }
  let p = await promise_wrap(lambda);
}
