import { arguments_assert } from "./arguments_assert.mjs";
export function bless_road_depth() {
  arguments_assert(arguments, 0);
  ("How many rows of road run along the far side of the pavement.");
  ("TWO, which is a road with a lane each way. One row reads as a track or a wide path rather than as a road, and the whole reason the road is there is to say what the pavement is the edge of; three or more would be a motorway running past somebody's front door.");
  ("Nothing drives on it, and nothing is meant to. This game has no vehicles and never will - what a road does here is finish the street. A pavement with open ground beyond it is a paved strip in a field, and the houses along it stop reading as houses on a road.");
  ("It is walkable, and that is deliberate rather than overlooked. Barring it would need it to be a solid, a solid is a thing the player cannot see past, and a wall of road across the bottom of every street would hide the block beyond it. With nothing driving there, somebody stepping into the road comes to no harm at all.");
  let depth = 2;
  return depth;
}
