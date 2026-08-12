export function app_g_day_trail_back_out_depth() {
  "how far back down its own trail the procession can retreat: the tiles the day remembers PAST the end of the line, over and above the one tile each member stands on.";
  "Backing up spends a tile of trail and puts none back, so this is the whole of how deep a dead end the player can walk into and still get out of. One spare tile buys exactly one step backwards, which frees the player only if they walked in exactly one tile.";
  "What really bounds it is the walk in: the player reached the closed end by walking there, so retreating no further than they came is always enough. That is not a number the day can know while it is happening, so this is a depth no corridor on a generated map reaches - generous, and costing one small pair of numbers per tile.";
  let r = 64;
  return r;
}
