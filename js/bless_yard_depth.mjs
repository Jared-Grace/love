import { arguments_assert } from "./arguments_assert.mjs";
export function bless_yard_depth() {
  arguments_assert(arguments, 0);
  ("How many rows of grass lie between the pavement and the road.");
  ("TWO. The yard is a lawn along the front of the street rather than a line drawn on it, and one row of anything reads as a line - the same row is what the pavement is, and putting one green row beside one tan row would look like two edges of the same path rather than like ground.");
  ("It sits BELOW the pavement, between the pavement and the road, and that is where it was moved to. It used to lie between the houses and the pavement, which is where a front garden goes; the trouble is that this street is seen from the front and slightly above, so a garden there is a band the houses stand behind and the crowd walks in front of - it separated the player from the doors they came to look at. Below the pavement it does the same job from the other side: the houses, their doorsteps and the people at them are all together at the top, and the green is what holds the road away from them.");
  ("It is the same depth on every street, unlike nearly everything else about a block. A yard is not how the player tells one road from another - the ground, the fronts, the roofs and the road already do that - and a depth that varied would make two streets different lengths in the one direction the player is not walking.");
  ("The grass here, the grass in the gaps between the houses, and the ground a low house leaves over inside its own slot are all the same yard seen in pieces. They meet with nothing between them, so what the player sees is green wrapped round the row of houses and a driveway crossing it from every door.");
  let depth = 2;
  return depth;
}
