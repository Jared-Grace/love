import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { or } from "./or.mjs";
export function daemon_healthy_is_not(status) {
  "a daemon is only fine if it is running now and set to come back on its own — either answer alone is a false all-clear";
  "active but disabled looks perfectly healthy today and is gone after the next reboot, which is the exact shape of failure that looks like 'the server stopped working overnight'";
  ("restarts are reported but deliberately not judged here: ",
    fn_name("webpack_watch"),
    " is built to recycle itself every twelve hours, so a climbing count is health rather than the absence of it, and only a human comparing it against how long the daemon has been up can tell the two apart");
  let left = property_get(status, "active");
  let down = not_equal(left, "active");
  let left2 = property_get(status, "enabled");
  let until_reboot = not_equal(left2, "enabled");
  let v = or(down, until_reboot);
  return v;
}
