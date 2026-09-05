import { arguments_assert } from "./arguments_assert.mjs";
export function bless_road_depth() {
  arguments_assert(arguments, 0);
  ("How many rows of road run along the far side of the pavement.");
  ("TWO, which is a road with a lane each way. One row reads as a track or a wide path rather than as a road, and the whole reason the road is there is to say what the pavement is the edge of; three or more would be a motorway running past somebody's front door.");
  ("What a road does here is finish the street. A pavement with open ground beyond it is a paved strip in a field, and the houses along it stop reading as houses on a road.");
  ("CARS DRIVE ON IT NOW, and that is a change to what this number is for rather than to the number itself. It used to say that nothing drove here and that nothing ever would; a street with a road and nothing on it reads as a street after everybody has gone home, and the game is asking the player to look at a place where people live. Two is still the answer, because two is what a two-way road is: one row each way.");
  ("So the depth is now load-bearing in a way it was not. Two rows is the smallest road that can carry traffic in both directions, and traffic in both directions is what says at a glance that this is a road and not a wide grey path. One row would be a lane, and a lane with cars going both ways along it is two lines of cars driving through each other.");
  ("It is walkable, and that is deliberate rather than overlooked. Barring it would need it to be a solid, a solid is a thing the player cannot see past, and a wall of road across the bottom of every street would hide the block beyond it.");
  ("A car that reaches the player passes straight over them and nothing happens, and that is a decision rather than a thing left undone. This game is about praying for the people on a street; a game that hurt the player for standing in the wrong square would be asking them to watch the traffic instead of the crowd, and it would put a punishment into the one place in this game where there is meant to be none. The crowd never leaves the footway, so the road stays somewhere they are not - which is what says it is a road - and the player who wanders onto it is simply someone standing in the road.");
  let depth = 2;
  return depth;
}
