import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_hold } from "./folder_public_root_hold.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function folder_public_root_noting() {
  "Which app's waiting pieces this run is entitled to change at the top of the published folder, or nothing when it may change none";
  "Kept in the same record as whether this run holds the block on that folder, because the two are the same question asked about the same run - what it is allowed to do there - and one record is one thing to remember to give back.";
  "It is an app's name rather than a plain yes, so a run rebuilding one app is not thereby entitled to overwrite another one's pieces. A run that ended badly and left this set behind can only go on changing the very app it was already changing.";
  arguments_assert(arguments, 0);
  let hold = folder_public_root_hold();
  let app_name = property_get_or_null(hold, "noting");
  return app_name;
}
