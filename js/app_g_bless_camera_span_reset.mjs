import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_center_tile } from "./app_g_bless_camera_center_tile.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { app_g_bless_camera_glide } from "./app_g_bless_camera_glide.mjs";
export async function app_g_bless_camera_span_reset(
  container_map,
  div_map,
  player_img_c,
) {
  arguments_assert(arguments, 3);
  ("Takes the camera back to the distance the praying game is normally played at, over the");
  ("same short journey it went out over, and returns once it is back.");
  ("It comes back to where it is already looking rather than to any particular square. A");
  ("zoom is about a point, and the honest point here is the middle of the screen: the");
  ("player has just watched a household lit up in front of them and the last thing wanted");
  ("is for the street to slide sideways while it comes closer. So it asks what square is in");
  ("the middle right now and holds that one still all the way back.");
  ("It writes the ordinary size rather than removing what was written, so the answer is the");
  ("same whether the camera was ever pulled back or not. A caller that had to know which of");
  ("those happened would be a caller keeping a second record of the camera, and two records");
  ("of one thing is the shape that drifts. A camera that never went out has nothing to come");
  ("back from, and the journey then costs one measurement and no movement at all.");
  ("The ordinary size is asked for rather than remembered from before the pull-back. What is");
  ("wanted afterwards is where this game plays, and a size saved beforehand is only that by");
  ("accident - it would also faithfully restore a size some other pull-back had left behind.");
  ("Asking gives back a sum the browser redoes on every window change, which is what a map");
  ("that has finished celebrating and gone back to being played needs.");
  let focus = app_g_bless_camera_center_tile(div_map, player_img_c);
  let size = app_g_bless_tile_size();
  await app_g_bless_camera_glide(
    container_map,
    div_map,
    player_img_c,
    size,
    focus,
  );
}
