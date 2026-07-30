import { permission_rule_granted_name } from "./permission_rule_granted_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_text_empty_is } from "./list_filter_text_empty_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { and } from "./and.mjs";
export function permission_settings_allow_drift_verdict(drift) {
  "which of the four things happened to the allow rules, read from what repairing them would add";
  "clean is no difference at all. shrink is rules only leaving, so authority narrows however they were written. rename is every rule that would be added paid for by a name that left, which is a grant the human already gave following its function to the name it now has. addition is a rule that would be added and nothing paid for, and it is the only one a human has to see.";
  "the whole question is what repairing would ADD, never what it would remove - a removal cannot grant anything, so it needs no name behind it, while every addition does";
  "a rule that would be added and names no dispatcher function is an addition whatever the counts say. those are the hand-written ones, and they are the powerful ones - an editor grant, a removal path - so a name that departed can never pay for one";
  "the boundary is arithmetic rather than intent, because a set comparison cannot tell a rename from a removal paired with an addition - so the count is what stops the pairing being free, and a grant gained always costs a grant given up";
  let missing = property_get(drift, "missing");
  let extra = property_get(drift, "extra");
  let arrived = property_get(drift, "arrived");
  let departed = property_get(drift, "departed");
  let none_missing = list_empty_is(missing);
  let none_extra = list_empty_is(extra);
  let unchanged = and(none_missing, none_extra);
  if (unchanged) {
    let r = "clean";
    return r;
  }
  if (none_missing) {
    let r2 = "shrink";
    return r2;
  }
  let named = list_map(missing, permission_rule_granted_name);
  let unnamed = list_filter_text_empty_is(named);
  let any_unnamed = greater_than(unnamed.length, 0);
  if (any_unnamed) {
    let r3 = "addition";
    return r3;
  }
  let none_departed = list_empty_is(departed);
  if (none_departed) {
    let r4 = "addition";
    return r4;
  }
  let outnumbered = greater_than(arrived.length, departed.length);
  if (outnumbered) {
    let r5 = "addition";
    return r5;
  }
  let r6 = "rename";
  return r6;
}
