import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { and } from "./and.mjs";
export function permission_settings_allow_drift_verdict(drift) {
  "which of the four things happened to the allow rules, read from the names that came and went";
  "clean is no difference at all. shrink is names leaving and none arriving, so authority only narrows. rename is names leaving and no more arriving than left, which is a grant the human already gave following its function to the name it now has. addition is a name arriving that nothing paid for, and it is the only one a human has to see.";
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
  let none_arrived = list_empty_is(arrived);
  if (none_arrived) {
    let r2 = "shrink";
    return r2;
  }
  let none_departed = list_empty_is(departed);
  if (none_departed) {
    let r3 = "addition";
    return r3;
  }
  let outnumbered = greater_than(arrived.length, departed.length);
  if (outnumbered) {
    let r4 = "addition";
    return r4;
  }
  let r5 = "rename";
  return r5;
}
