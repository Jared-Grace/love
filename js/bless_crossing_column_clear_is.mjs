import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_crossing_within_is } from "./bless_crossing_within_is.mjs";
import { list_any } from "./list_any.mjs";
import { not } from "./not.mjs";
export function bless_crossing_column_clear_is(world, to) {
  arguments_assert(arguments, 2);
  ("Answers whether the band of road a walker is about to claim is empty right now.");
  ("This is a narrower question than whether anything is COMING. Nothing is coming means");
  ("she can walk across at her own pace and never be waited for; nothing is standing in");
  ("the band means only that the claim can be made without shutting a vehicle inside it.");
  ("The second is what has to be true before the claim, and the first is what she waits");
  ("for while she has the patience to.");
  ("A vehicle caught inside the band at the moment of the claim would be held there until");
  ("she was across, which is a vehicle stopped ON TOP OF her rather than short of her.");
  ("That is the one arrangement the whole protocol exists to prevent, so the claim asks");
  ("this first and waits again if the answer is no.");
  let vehicles = property_get(world, "vehicles");
  function inside_is(vehicle) {
    let row = property_get(vehicle, "y");
    let at = property_get(vehicle, "x");
    let inside = bless_crossing_within_is(to, row, at);
    return inside;
  }
  let occupied = list_any(vehicles, inside_is);
  let clear = not(occupied);
  return clear;
}
