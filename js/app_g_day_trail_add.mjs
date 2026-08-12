export function app_g_day_trail_add(from) {
  "remember the tile the player has just left, at the front of the day's trail - the way the line behind them walks.";
  "The trail is what makes a line rather than a crowd: the person at the front of it stands where the player last stood, the next stands where the player stood before that, and so on. Kept as its own list rather than read back off where the people are standing, because somebody who has only just been gathered is not standing in the line yet and still has to be told where the back of it is.";
  "A COPY of the tile, not the tile itself. What arrives is a step of the path being walked, and a follower is moved by assigning what they are given onto the person - so handing over the path's own node would write the path's other workings onto somebody.";
  let x = property_get(from, "x");
  let y = property_get(from, "y");
  let tile = {
    x,
    y,
  };
  let state = app_g_day_state();
  let trail = property_get(state, "trail");
  list_add_first(trail, tile);
  let length = app_g_day_trail_length();
  let over = greater_than(list_size(trail), length);
  if (over) {
    let kept = list_take(trail, length);
    property_set(state, "trail", kept);
  }
}
