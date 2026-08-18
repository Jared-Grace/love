export function app_g_bless_tile_size() {
  "How large one tile of the prayer game's grid is drawn.";
  "Smaller than the world map's own tile on purpose. That one is a camera model sized so a";
  "person is large enough to walk up to; this view has to hold the whole cone and the ground";
  "either side of it in one screen, because seeing how far you can see IS the mechanic here.";
  "Distance in 2-D is zoom, so this is the value that moves when the ladder climbs. Shrink";
  "it and a stadium crowd reads as a field of marks - which is what a 3-D player sees from";
  "across the same stadium, so it is the same view and not a poorer one.";
  "The second term keeps eleven tiles across the narrowest phone, so the grid never has to";
  "scroll sideways to show a cone the player is being asked to judge.";
  let size = "min(34px, 100vw / 11)";
  return size;
}
