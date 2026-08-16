import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_assign } from "./object_assign.mjs";
import { json_to } from "./json_to.mjs";
import { html_loading } from "./html_loading.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
import { retry } from "./retry.mjs";
export async function http_browser_bytes(method, options, body, url) {
  arguments_assert(arguments, 4);
  let r = {
    method,
  };
  let exists = property_exists(options, "body");
  if (exists) {
    object_assign(r, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      body: json_to(body),
    });
  }
  async function attempt() {
    ("a stalled dev HTTP/1.1 connection must not hang forever: a fetch with no ceiling never settles, so ",
      html_loading.name,
      "'s finally never runs and the shared loading overlay stays up permanently. abort after a ceiling (covering both the fetch and the body read) so the socket frees and rejects; retry lets a fresh connection succeed — which is exactly why a manual reload 'fixes' it today");
    let controller = new AbortController();
    property_set(r, "signal", controller.signal);
    function abort() {
      controller.abort();
    }
    let timer = setTimeout(abort, 8000);
    try {
      let response = await fetch(url, r);
      if (not(response.ok)) {
        error("Failed to fetch file");
      }
      let buf = await response.arrayBuffer();
      return buf;
    } finally {
      clearTimeout(timer);
    }
  }
  let attempted = await retry(3, attempt);
  return attempted;
}
