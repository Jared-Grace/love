import { greater_than } from "./greater_than.mjs";
import { permission_rules_unreachable } from "./permission_rules_unreachable.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_reachable_gate_run() {
  "Gate: every Bash allow rule must actually auto-approve the command it names. A rule is matched against the verb the guard computes, not the text you typed, so a rule can look right and still never apply — the command keeps prompting and the rule looks like it should have stopped it. Throws so the dispatcher seam exits nonzero.";
  let offenders = await permission_rules_unreachable();
  for (let o of offenders) {
    let rule = property_get(o, "rule");
    let decision = property_get(o, "decision");
    console.log("UNREACHABLE  " + rule + "  (guard says " + decision + ")");
  }
  console.log("\nunreachable " + offenders.length);
  if (greater_than(offenders.length, 0)) {
    throw new Error(
      "permission reachable gate: " +
        offenders.length +
        " allow rules never auto-approve the command they name",
    );
  }
  let r = {
    unreachable: 0,
  };
  return r;
}
