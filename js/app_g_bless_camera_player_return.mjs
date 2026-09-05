import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { app_g_bless_camera_glide } from "./app_g_bless_camera_glide.mjs";
export async function app_g_bless_camera_player_return(
  container_map,
  div_map,
  player_img_c,
  player,
) {
  "Brings the camera home when a celebration is over: back to the distance the game is played at and back onto the player, as one journey, returning once it has arrived.";
  arguments_assert(arguments, 4);
  ("The distance and the place are undone TOGETHER, which is the same thing the journey");
  ("out does and for the same reason. A celebration leaves the camera pressed in close on");
  ("a house, and there are two things wrong with that once it is over: how near it is, and");
  ("what it is looking at. Undone one after the other the street pulls back around the");
  ("house and then slides off it to find the player, and the second of those reads as a");
  ("cut. Asked together, the street simply opens out and the player is standing in it.");
  ("It WAS two. The camera came back to the ordinary distance holding whatever square");
  ("happened to be in the middle, and the player was put in the middle afterwards by a");
  ("plain scroll. That second half was not only a cut, it was a race: a scroll written");
  ("straight to the box can be overtaken by a journey that has not finished, and the");
  ("journey places the last frame wherever it was going. Asking for one journey to the");
  ("right place removes the cut and the race in the same line.");
  ("The playing size is asked for rather than remembered from before the celebration. What");
  ("is wanted afterwards is where this game plays, and a size saved beforehand is only");
  ("that by accident - it would faithfully restore a size some other pull-back left");
  ("behind. Asking gives back a sum the browser redoes on every window change, which is");
  ("what a map that has gone back to being played needs.");
  ("It is safe when nothing ever moved. A journey to the size the map is already at is an");
  ("ordinary scroll, and a scroll onto a player who is already in the middle goes nowhere,");
  ("so a prayer that moved no camera pays for a measurement and no movement at all. That");
  ("is what lets every way a celebration can end ask for this same one line.");
  let size = app_g_bless_tile_size();
  await app_g_bless_camera_glide(
    container_map,
    div_map,
    player_img_c,
    size,
    player,
  );
}
