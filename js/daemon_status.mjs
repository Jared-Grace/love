import { daemon_properties } from "./daemon_properties.mjs";
import { property_get } from "./property_get.mjs";
export async function daemon_status(fn_name) {
  ("the answers that together mean 'this is fine': running right now, set to come back on its own, since when, and how many times it has had to come back");
  ("enabled tells you a stopped daemon is only stopped until the next boot, which is a different problem from one that was never installed");
  ("restarts is the one no other answer here can reveal: a daemon dying and coming back every few seconds reads active every single time it is asked");
  ("a count, so it comes back as a number: systemd prints text, and text compares by digit, which would rank ten restarts below six");
  let properties = await daemon_properties(fn_name, [
    "ActiveState",
    "UnitFileState",
    "ActiveEnterTimestamp",
    "NRestarts",
  ]);
  let v = {
    daemon: fn_name,
    active: property_get(properties, "ActiveState"),
    enabled: property_get(properties, "UnitFileState"),
    since: property_get(properties, "ActiveEnterTimestamp"),
    restarts: integer_to_try(property_get(properties, "NRestarts")),
  };
  return v;
}
