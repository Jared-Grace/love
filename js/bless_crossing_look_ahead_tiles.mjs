import { arguments_assert } from "./arguments_assert.mjs";
export function bless_crossing_look_ahead_tiles() {
  arguments_assert(arguments, 0);
  ("How far up the road the camera leans when the walker turns their head that way, counted");
  ("in squares.");
  ("It is the distance that puts more of the road the walker is looking at on the screen");
  ("while leaving the walker themselves near the middle of it. Centred on the walker exactly,");
  ("both directions look identical and a turned head is a few pixels nobody reads; leaned far");
  ("enough to push the walker off to the edge, the screen has stopped being a person looking");
  ("at a road and become a camera that jumps from one side to the other.");
  ("ONE square, because this lean is measured against the CLOSE view and not the walking");
  ("one. The kerb zoom holds only about six squares across, so half the screen is barely");
  ("three - and a lean of three squares therefore lands the walker on the very edge, which");
  ("is what it looked like. One square moves them about a third of the way out: plainly to");
  ("one side, plainly still on the screen.");
  ("So this number cannot be read on its own. It is a fraction of whatever the close view");
  ("holds, and anything that brings the camera nearer makes the same number lean further.");
  let tiles = 1;
  return tiles;
}
