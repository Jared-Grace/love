import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function dev_trace_on_is() {
  "Whether this page keeps a trace: only a browser page served from a /dev/ or /latest/ path. latest is one person testing on a phone, on the only build that has an offline cache, so it is where an offline fault can be seen at all. Everywhere else - node, prod - the trace costs one check and nothing more.";
  if (equal(typeof location, "undefined")) {
    return false;
  }
  let path = location.pathname;
  let left = path.indexOf("/dev/");
  let latest = path.indexOf("/latest/");
  let on = not_equal(left, -1) || not_equal(latest, -1);
  return on;
}
