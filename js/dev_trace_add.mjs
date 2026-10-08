import { json_from } from "./json_from.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { dev_trace_on_is } from "./dev_trace_on_is.mjs";
import { dev_trace_storage_key } from "./dev_trace_storage_key.mjs";
export function dev_trace_add(kind, detail) {
  "Writes one step of what a /dev/ page did into the device's own storage - a tap, a fetch and how it ended, the loading screen going up or down, a read from the offline copy.";
  "Kept on the device rather than sent at once because the case this exists for is a phone with its wifi off: it cannot reach the machine that would write the line down. The trace waits on the phone and goes up once the network is back.";
  "The device's clock and whether it believed it was online are written with every step, because the question asked of a trace is nearly always what happened between two moments and whether there was a network at the time.";
  "Nothing here may throw: this is a record of the page, so it must never become a fault in it. Only the last few hundred steps are kept, so a long session cannot fill the storage the offline bible also lives in.";
  let on = dev_trace_on_is();
  if (not(on)) {
    return;
  }
  try {
    let key = dev_trace_storage_key();
    let held = localStorage.getItem(key);
    let list = held ? json_from(held) : [];
    list.push({
      t: date_now_milliseconds(),
      online: navigator.onLine,
      kind,
      detail,
    });
    let kept = list.slice(-600);
    let json = json_to(kept);
    localStorage.setItem(key, json);
  } catch (caught) {
    return;
  }
}
