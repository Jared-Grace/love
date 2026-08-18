export function app_g_bless_tile_size() {
  "How large one tile is drawn in the praying game.";
  "Smaller than the gospel game's on purpose. That one is sized so a person is large enough";
  "to walk up to and speak with, and five tiles across a phone is plenty for that. This view";
  "has to hold the whole cone and the ground either side of it at once, because seeing how";
  "far you can see IS the mechanic here - a cone three tiles deep is seven tiles wide at its";
  "far edge, and a screen that fits seven exactly would clip the wash at both corners.";
  "Eleven across the narrowest phone leaves the cone whole with ground showing either side,";
  "so a player can see what they are NOT looking at and turning is a choice rather than a";
  "guess.";
  "Distance in a flat map is zoom, so this is the value that moves when the ladder climbs.";
  "Shrink it and a stadium crowd reads as a field of marks - which is what a first-person";
  "player sees from across the same stadium.";
  let size = "min(34px, 100vw / 11)";
  return size;
}
