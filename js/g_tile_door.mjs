export function g_tile_door() {
  "The way into a building - drawn as one square of panelled wood in the middle of its";
  "front.";
  "It is a WALL and not an opening. Nobody goes inside, because there is no inside; the";
  "door is there so that a person standing at it is standing somewhere the player can see";
  "is theirs. Made walkable it would be a hole in the house leading nowhere.";
  "Kept apart from the front it sits in so that the front may change material and the door";
  "stay a door. A building told apart from its neighbour by its walls still has to be";
  "entered at the same recognisable place.";
  let door = "wood_tile";
  return door;
}
