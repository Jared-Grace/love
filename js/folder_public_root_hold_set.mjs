import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_hold } from "./folder_public_root_hold.mjs";
import { property_set } from "./property_set.mjs";
export function folder_public_root_hold_set(held) {
  "$plain held";
  "Says whether this run is now the one holding the block on the top of the published folder";
  "Set as the block is taken and unset as it is given back, and both halves matter equally. Left set after the block was let go, this run would go on writing that folder while somebody else was sending it - which is the one thing the block exists to stop, and it would be stopped for everybody except the run that had already been trusted once.";
  arguments_assert(arguments, 1);
  let hold = folder_public_root_hold();
  property_set(hold, "held", held);
  return hold;
}
