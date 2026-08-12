export function g_game_npcs_standing(g, npcs) {
  "the map as the pathfinder sees it, with a chosen set of people standing on it and nobody else.";
  "The way somewhere is worked out from the tiles of the map and the people in the way, and nothing else - so asking what the way WOULD be if some of those people were not there is asking for the same map with a shorter list of people. Everything else the game holds is left out on purpose: the answer is a question being asked, not a game being played, and nothing may be saved from it.";
  let coordinates = property_get(g, "coordinates");
  let standing = {
    coordinates,
    npcs,
  };
  return standing;
}
