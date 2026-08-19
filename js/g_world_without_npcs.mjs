export function g_world_without_npcs(g) {
  "The same world with nobody standing in it - the ground alone.";
  "Anything that asks a world where somebody may walk treats a person as a wall, which is";
  "right while a street holds a handful of people and wrong once it holds a crowd. A crowd";
  "closes every way at once, and a player hemmed in by neighbours who will all have moved";
  "in a second is stuck rather than blocked.";
  "So this is the second question, asked only when the first one found no way at all: is";
  "there a way if the people are not counted? Somebody walking then slips past whoever is";
  "in the road, the way a person crossing a busy pavement does.";
  "It is a reading of the world rather than a change to it. The crowd is left exactly where";
  "it was standing - only this answer is blind to it.";
  let coordinates = g.coordinates;
  let nobody = [];
  let world = { coordinates: coordinates, npcs: nobody };
  return world;
}
