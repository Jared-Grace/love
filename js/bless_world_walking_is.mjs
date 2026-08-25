import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { object_empty_is } from "./object_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function bless_world_walking_is(world) {
  arguments_assert(arguments, 1);
  ("Whether the player is in the middle of a walk right now.");
  ("Read off the WAY the walk holds open rather than kept as a second flag. A walk already");
  ("writes down the lane it has cleared for itself and gives it back when it ends, so the");
  ("fact is on the world for anybody to ask - and a flag beside it would be a second copy");
  ("of the same fact, which is a thing that can disagree.");
  ("A world that has never been walked in has no way at all, which is not walking either.");
  let way = property_get_or_null(world, "way");
  if (not(way)) {
    return false;
  }
  let empty = object_empty_is(way);
  let walking = not(empty);
  return walking;
}
