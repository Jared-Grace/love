import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { picture_swap_offered } from "./picture_swap_offered.mjs";
import { list_includes } from "./list_includes.mjs";
export function picture_swap_decided_is(swap) {
  "$plain swap";
  "Whether one of the pictures a row shows for this place is already approved.";
  "ONLY A PICTURE ON SCREEN COUNTS. A song's places were approved once already, for an older round of pictures; a page narrowed to a new folder asks about that folder's pictures, so an old choice among pictures it leaves off must not take the place away.";
  arguments_assert(arguments, 1);
  let chosen = property_get_or(swap, "chosen", []);
  for (let offered of picture_swap_offered(swap)) {
    if (list_includes(chosen, offered.path)) {
      return true;
    }
  }
  return false;
}
