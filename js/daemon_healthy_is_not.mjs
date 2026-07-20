import { property_get } from "./property_get.mjs";
import { or } from "./or.mjs";
export function daemon_healthy_is_not(status) {
  ("a daemon is only fine if it is running now and set to come back on its own — either answer alone is a false all-clear");
  ("active but disabled looks perfectly healthy today and is gone after the next reboot, which is the exact shape of failure that looks like 'the server stopped working overnight'");
  let down = property_get(status, "active") !== "active";
  let until_reboot = property_get(status, "enabled") !== "enabled";
  let v = or(down, until_reboot);
  return v;
}
