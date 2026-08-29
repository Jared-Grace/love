import { error_json } from "./error_json.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_assign } from "./object_assign.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { retry } from "./retry.mjs";
export async function http_browser_bytes(method, options, body, url) {
  "The browser's way of fetching an address, answering the raw bytes, giving up after a ceiling and asking again on a fresh connection when it does.";
  "THE CEILING AND THE NUMBER OF TRIES COME OFF THE OPTIONS, and the numbers written here are only what a caller gets for saying nothing. Eight seconds and three tries are right for the ordinary case, which is a page asking a local server a question it answers in milliseconds; they are wrong for the rare caller asking for something that genuinely takes minutes, and that caller was not failing slowly, it was failing every time. A caller who knows how long its own work takes is the only one who can say.";
  "ASKING AGAIN IS ALSO SOMETHING TO BE ABLE TO TURN OFF. A retry is free when the work is a lookup and costs three times the work when it is a render, so a long job says one try and means it - three renders of the same video is the worst outcome of the three, worse than the failure it was trying to avoid.";
  let ceiling = options.milliseconds_ceiling || 8000;
  let tries = options.tries || 3;
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
      fn_name("html_loading"),
      "'s finally never runs and the shared loading overlay stays up permanently. abort after a ceiling (covering both the fetch and the body read) so the socket frees and rejects; retry lets a fresh connection succeed — which is exactly why a manual reload 'fixes' it today");
    let controller = new AbortController();
    property_set(r, "signal", controller.signal);
    function abort() {
      controller.abort();
    }
    let timer = setTimeout(abort, ceiling);
    try {
      let response = await fetch(url, r);
      ("WHAT WAS ASKED FOR AND WHAT CAME BACK ARE BOTH IN THE COMPLAINT. A refusal used to be reported as four words naming no address and no status, which is a true sentence about nothing anybody can act on - three of them arrived from a phone in a row and there was no telling a file that is not there from a file that is there and will not be handed over without signing in. The retrier writes down what each attempt said, so saying it here is what carries it the whole way out.");
      if (not(response.ok)) {
        error_json({
          hint: "the address answered and the answer was a refusal - is the file there, and is it readable without signing in?",
          url,
          status: response.status,
          status_text: response.statusText,
        });
      }
      let buf = await response.arrayBuffer();
      return buf;
    } finally {
      clearTimeout(timer);
    }
  }
  let attempted = await retry(tries, attempt);
  return attempted;
}
