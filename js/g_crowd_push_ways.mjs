export function g_crowd_push_ways(direction) {
  "the ways somebody in the way is asked to give, in the order they are tried: the two sides first, then onward, then back.";
  "Sides first is what makes a crowd standing across a way open as a LANE - the two halves stepping apart and the walker going up the middle - rather than the whole crowd shuffling along in front of the walker like a queue. Trying the sides first does not merely allow that, it is the only reason it happens: onward and back would empty the tile just as well, and a crowd shoved onward is a crowd that never parts.";
  "Onward and back are looked at only when neither side can give, which is exactly the one-wide way: walls to either hand, and the only room at one of its ends. Room BACK is the last thing tried because it is room the walker is about to walk into.";
  let ways = g_direction_sides(direction);
  list_add(ways, direction);
  let back = g_direction_opposite(direction);
  list_add(ways, back);
  return ways;
}
