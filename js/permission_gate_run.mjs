import { permission_run_names } from "./permission_run_names.mjs";
import { permission_run_names_not_function } from "./permission_run_names_not_function.mjs";

// Gate: every r.mjs permission rule must name a real function. A rule is
// matched as literal text, so a rule naming an alias key grants whatever that
// alias points to later — a rename silently moves the auto-approval, and a
// freed name is claimable by anyone. Throws so the r.mjs seam exits nonzero.
export async function permission_gate_run() {
  let names = await permission_run_names();
  let offenders = await permission_run_names_not_function();
  for (let o of offenders) {
    console.log("NOT A FUNCTION  " + o.name + "  (" + o.kind + ")");
  }
  console.log("\nchecked " + names.length + "  offenders " + offenders.length);
  if (offenders.length > 0) {
    throw new Error("permission gate: " + offenders.length + " rules do not name a function");
  }
  return { checked: names.length, offenders: 0 };
}
