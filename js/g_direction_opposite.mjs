export function g_direction_opposite(direction) {
  "the way back - the exact turnabout of this one, west for east and north for south.";
  "Asked when somebody has to get out of the way and neither side can give: the way the walker came from is the last place to look for room, because room there is room the walker is about to leave anyway.";
  let opposites = {
    east: "west",
    west: "east",
    north: "south",
    south: "north",
  };
  let opposite = property_get(opposites, direction);
  return opposite;
}
