import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_hold } from "./folder_public_root_hold.mjs";
import { property_set } from "./property_set.mjs";
export function folder_public_root_noting_clear() {
  "Gives back the entitlement to change one app's waiting pieces at the top of the published folder";
  "Called once the pieces are in place and what they are is written down again. Left set, this run alone could go on changing that app's pieces with nothing to say where they came from - which is the very thing the entitlement was taken out to keep to a run that would account for it.";
  arguments_assert(arguments, 0);
  let hold = folder_public_root_hold();
  property_set(hold, "noting", null);
  return hold;
}
