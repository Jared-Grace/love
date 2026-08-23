import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function folder_public_root_hold() {
  "Whether this run is the one holding the block on the top of the published folder, kept where only this run can see it";
  "The lock on disk says somebody holds it and cannot say who, because what it writes beside itself is the name of a function and two runs can be inside the same function. So the holder has to remember for itself, and remembering somewhere only it can read is what makes the answer true rather than merely likely.";
  "It has to be asked at all because the run that takes the block is the very run that then writes that folder. Without this the block would refuse the copying it was taken out to protect, and promoting would stop itself.";
  "It is a record rather than a plain answer so that taking the block and giving it back can both reach the same one - a value handed back could only be read, never moved.";
  arguments_assert(arguments, 0);
  let key = "public_root_held";
  let hold = property_get_or_null(globalThis, key);
  let missing = not(hold);
  if (missing) {
    hold = {
      held: false,
    };
    property_set(globalThis, key, hold);
  }
  return hold;
}
