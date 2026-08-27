import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_hold } from "./folder_public_root_hold.mjs";
import { property_set } from "./property_set.mjs";
export function folder_public_root_noting_set(app_name) {
  "$plain app_name";
  "Says that this run is now the one entitled to change one named app's waiting pieces at the top of the published folder";
  "Taken by whoever is about to rebuild those pieces and write the note about them again, or to put back the ones already being served. Either way the folder is describable afterwards, which is the whole of what the entitlement is for.";
  arguments_assert(arguments, 1);
  let hold = folder_public_root_hold();
  property_set(hold, "noting", app_name);
  return hold;
}
