import { daemon_property } from "./daemon_property.mjs";
export async function daemon_status(fn_name) {
  ("the three answers that together mean 'this is fine': running right now, set to come back on its own, and since when");
  ("enabled tells you a stopped daemon is only stopped until the next boot, which is a different problem from one that was never installed");
  let active = await daemon_property(fn_name, "ActiveState");
  let enabled = await daemon_property(fn_name, "UnitFileState");
  let since = await daemon_property(fn_name, "ActiveEnterTimestamp");
  let v = {
    daemon: fn_name,
    active,
    enabled,
    since,
  };
  return v;
}
