import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function dev_trace_on_is() {
  "Whether this page keeps a trace: only a browser page served from a /dev/ path. Everywhere else - node, prod, latest - the trace costs one check and nothing more.";
  if (equal(typeof location, "undefined")) {
    return false;
  }
  let path = location.pathname;
  let left = path.indexOf("/dev/");
  let on = not_equal(left, -1);
  return on;
}
