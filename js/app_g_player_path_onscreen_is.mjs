import { app_g_tiles_visible_window } from "./app_g_tiles_visible_window.mjs";
import { g_coordinates_window_inside_is } from "./g_coordinates_window_inside_is.mjs";
import { list_all } from "./list_all.mjs";
export function app_g_player_path_onscreen_is(player, path, div_map) {
  "whether every tile of a walk is on the screen the player can see.";
  "WHY A WALK IS BOUNDED BY THE SCREEN. Tapping a tile is a promise about what happens next, and the player can only make that promise about what is in front of them. Land shaped like an unclosed earring - a lagoon with one narrow way round the far end - lets somebody tap the water's other bank, two tiles away to the eye, and be walked a hundred tiles the long way round with no idea it was coming. Nothing about that walk is wrong; it is simply not the walk that was asked for.";
  "SO THE LIMIT IS ON THE ASKING, NOT ON THE WALKING. It is not that the player's legs are short - it is that they cannot commit to what they cannot see. Ask it once, at the tap, and never again while the walk runs; a rule asked halfway would stop somebody in open ground for scrolling.";
  "WHY NOT A LENGTH OR A DETOUR RATIO. Both were tried on paper and both refuse the wrong walk: a U-shaped wall four tiles across the mouth and ten deep makes a path six times the straight-line distance, entirely on screen, obviously intended, and any ratio loose enough to allow it is loose enough to allow the earring. The screen is the honest boundary because it is the same boundary the player is looking at.";
  "the whole path is asked about, not only where it ends: the end of an earring walk is in plain sight, and it is the middle that leaves the room.";
  "the window here is the tiles that are FULLY visible, which is a shade stricter than the eye - a tile sliced by the edge of the screen is refused. one window rather than two is deliberate: a rule the player can state in a sentence is worth more than a tile of reach at the boundary.";
  let window_tiles = app_g_tiles_visible_window(player, div_map);
  function lambda(coordinates) {
    let inside = g_coordinates_window_inside_is(coordinates, window_tiles);
    return inside;
  }
  let onscreen = list_all(path, lambda);
  return onscreen;
}
