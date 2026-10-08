import { catch_null_async } from "./catch_null_async.mjs";
import { not } from "./not.mjs";
import { dev_trace_on_is } from "./dev_trace_on_is.mjs";
import { dev_trace_send } from "./dev_trace_send.mjs";
import { dev_trace_add } from "./dev_trace_add.mjs";
export function dev_trace_watch() {
  "Starts the trace on a /dev/ page: every tap, every uncaught fault, and every time the network comes or goes, written down on the device; and whatever is written sent up now and again each time the network returns.";
  "Taps are caught on the way down rather than on the way up, so a tap is written before whatever it starts - including a step that never finishes, which is the step a stuck loading screen is made of.";
  "A tap is named by the words on what was pressed, because that is what the person testing would say they pressed.";
  let on = dev_trace_on_is();
  if (not(on)) {
    return;
  }
  async function send() {
    await catch_null_async(dev_trace_send);
  }
  function tap(e) {
    let target = e.target;
    let words = target && target.textContent ? target.textContent : "";
    let tag = target && target.tagName ? target.tagName : "";
    dev_trace_add("tap", {
      tag,
      words: words.trim().slice(0, 60),
      where: location.href,
    });
  }
  function fault(e) {
    dev_trace_add(
      "error",
      String(e.message || e.error) + " @ " + e.filename + ":" + e.lineno,
    );
  }
  function rejected(e) {
    let reason = e.reason;
    let detail = String((reason && reason.stack) || reason);
    dev_trace_add("unhandled", detail);
  }
  function went_offline() {
    dev_trace_add("offline", location.href);
  }
  function came_online() {
    dev_trace_add("online", location.href);
    send();
  }
  document.addEventListener("click", tap, true);
  window.addEventListener("error", fault);
  window.addEventListener("unhandledrejection", rejected);
  window.addEventListener("offline", went_offline);
  window.addEventListener("online", came_online);
  dev_trace_add("boot", location.href);
  send();
}
