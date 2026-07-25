import { greater_than } from "./greater_than.mjs";
import { permission_rules_unreachable } from "./permission_rules_unreachable.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_reachable_gate_run() {
  "Gate: every allow rule must be able to take effect on what it names. A command rule is matched against the verb the guard computes rather than the text you typed, and a path rule is decided by a hook that runs before the permission engine sees it, so a rule can look right and still never apply. The symptom is the same either way: the prompt keeps appearing and the rule looks like it should have stopped it. Throws so the dispatcher seam exits nonzero.";
  let offenders = await permission_rules_unreachable();
  for (let o of offenders) {
    let rule = property_get(o, "rule");
    let decision = property_get(o, "decision");
    let by = property_get(o, "by");
    console.log(
      "UNREACHABLE  " + rule + "  (" + by + " says " + decision + ")",
    );
  }
  console.log("\nunreachable " + offenders.length);
  if (greater_than(offenders.length, 0)) {
    throw new Error(
      "permission reachable gate: " +
        offenders.length +
        " allow rules can never take effect on what they name",
    );
  }
  let r = {
    unreachable: 0,
  };
  return r;
}
