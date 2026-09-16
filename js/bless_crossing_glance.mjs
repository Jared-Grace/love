import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
import { g_direction_step } from "./g_direction_step.mjs";
import { bless_crossing_look_ahead_tiles } from "./bless_crossing_look_ahead_tiles.mjs";
import { g_coordinates_axes_generic } from "./g_coordinates_axes_generic.mjs";
import { multiply } from "./multiply.mjs";
import { g_coordinates_offset } from "./g_coordinates_offset.mjs";
import { bless_camera_look } from "./bless_camera_look.mjs";
export async function bless_crossing_glance(
  player,
  player_img_c,
  facing,
  div_map,
  toward,
) {
  arguments_assert(arguments, 5);
  ("One look up the road: the walker turns their head that way and the screen slides that way");
  ("with them, so that what they are looking at is what is being shown.");
  ("The head and the camera are ONE act, said once, rather than two things kept in step by");
  ("whoever calls them. A glance happens in three places in a wait - the first look, the");
  ("second look, and every turn of the head afterwards - and a camera moved at two of those");
  ("three leaves the third looking the wrong way, with nothing to report it.");
  ("Turning the head alone was not enough to read. It is a few pixels of a figure the height");
  ("of a thumbnail, and the two facings are near enough mirror images that a player who was");
  ("not told to watch for it sees a walker standing still. Moving the screen says the same");
  ("thing in a way that cannot be missed, and it says it about the ROAD - which is the thing");
  ("actually being checked, and which a camera locked on the walker never shows more of in");
  ("one direction than the other.");
  ("It is a plain slide and never a journey, because how close the camera is has already been");
  ("decided by whoever brought it in, and re-deciding it on every glance would have the");
  ("street breathing in and out for as long as the traffic lasted.");
  app_shared_game_character_face(player, player_img_c, facing);
  let step = g_direction_step(facing);
  let tiles = bless_crossing_look_ahead_tiles();
  let both = {
    x: tiles,
    y: tiles,
  };
  let offset = g_coordinates_axes_generic(step, both, multiply);
  let at = g_coordinates_offset(player, offset);
  await bless_camera_look(div_map, player_img_c, at);
}
