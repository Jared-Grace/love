import { not_equal } from "./not_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { dev_trace_on_is } from "./dev_trace_on_is.mjs";
import { dev_trace_storage_key } from "./dev_trace_storage_key.mjs";
export async function dev_trace_send() {
  "Sends what this /dev/ page traced on the device up to the dev server, which writes it down beside the errors pages report. Answers how many steps went up.";
  "Only the steps that were sent are taken off the device, and only once the server said it wrote them - a send that failed, because the wifi is still off, leaves every step where it was for the next try.";
  "The steps are sent as one written-out list rather than as a list, because the server is handed its arguments as words.";
  let on = dev_trace_on_is();
  if (not(on)) {
    let r = 0;
    return r;
  }
  ("a latest page has no dev server behind it, so it sends to storage instead - fetched by name only then, so the firebase library never rides along in a dev page or an ordinary one");
  let left = location.pathname.indexOf("/dev/");
  let dev = not_equal(left, -1);
  if (not(dev)) {
    let m = await import("./dev_trace_send_storage.mjs");
    let sent = await m.dev_trace_send_storage();
    return sent;
  }
  let key = dev_trace_storage_key();
  let held = localStorage.getItem(key);
  let list = held ? json_from(held) : [];
  if (equal(list.length, 0)) {
    let r2 = 0;
    return r2;
  }
  let json = json_to(list);
  let body = json_to({
    f_name: fn_name("dev_trace_log_add"),
    args: [json, location.href],
  });
  let response = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  if (not(response.ok)) {
    let r3 = 0;
    return r3;
  }
  let last = list[subtract(list.length, 1)].t;
  let now_held = localStorage.getItem(key);
  let now_list = now_held ? json_from(now_held) : [];
  function after(entry) {
    let g = greater_than(entry.t, last);
    return g;
  }
  let rest = now_list.filter(after);
  let json2 = json_to(rest);
  localStorage.setItem(key, json2);
  let r4 = list.length;
  return r4;
}
