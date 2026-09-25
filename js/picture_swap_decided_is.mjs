import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function picture_swap_decided_is(swap) {
  "$plain swap";
  "Whether any picture for this place is already approved.";
  "ANY APPROVAL COUNTS, EVEN OF A PICTURE THE PAGE DOES NOT SHOW, because an approved place needs no decision. Counting only pictures on screen was tried first, so that a page narrowed to a new folder could ask again about a place approved in an older round; it put approved places back on screen whenever the named folders left the approved picture off, which read as the approval not having taken. To judge an approved place again, take its approval back first.";
  arguments_assert(arguments, 1);
  let chosen = property_get_or(swap, "chosen", []);
  let ne = list_empty_not_is(chosen);
  return ne;
}
