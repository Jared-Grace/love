import { g_direction_sides } from "./g_direction_sides.mjs";
export function bless_sidewalk_headings() {
  "The two ways somebody can be walking along a pavement - one up the street, one down it.";
  "Derived from the way the buildings face rather than written out as east and west, so the";
  "day a block is laid out along the other axis the people on it turn with it. Written down,";
  "they would go on walking east and west against a pavement running north and south, and";
  "every one of them would be pressed against a wall.";
  "The sides of the direction the fronts look are exactly the two ways along them, because a";
  "pavement runs across a building's face and not into it.";
  "These being TWO is what the player sees as some people coming and some people going. One";
  "would be a procession; all four would be a milling crowd with no street in it.";
  let facing = "south";
  let headings = g_direction_sides(facing);
  return headings;
}
