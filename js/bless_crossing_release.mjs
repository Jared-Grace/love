import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
export function bless_crossing_release(world) {
  arguments_assert(arguments, 1);
  ("Gives the road back. The traffic held at the edge of the band starts moving again on");
  ("its next tick.");
  ("It is asked at the END of a walk rather than at the moment the walker reaches the far");
  ("pavement, and it is asked whether she crossed anything or not. A claim that is never");
  ("given back stops that street for the rest of the game, and a walk can end anywhere -");
  ("interrupted, refused, or simply finished in the middle of the road because that is");
  ("where the player tapped. None of those endings would reach a release written into the");
  ("step that leaves the road.");
  ("Releasing while she is still standing on the road is safe, because the traffic has a");
  ("second and older rule that makes a vehicle give way to a player already on it. The");
  ("band is the promise that gets her ACROSS; that rule is what protects her standing.");
  property_set(world, "crossing", null);
}
