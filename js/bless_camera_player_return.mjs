import { arguments_assert } from "./arguments_assert.mjs";
import { bless_camera_map_get } from "./bless_camera_map_get.mjs";
import { bless_tile_size } from "./bless_tile_size.mjs";
import { bless_camera_glide } from "./bless_camera_glide.mjs";
export async function bless_camera_player_return(
  div_map,
  player_img_c,
  player,
) {
  arguments_assert(arguments, 3);
  ("Brings the camera home when whatever it went to watch is over: back to the distance the");
  ("game is played at and back onto the player, as one journey, returning once it has");
  ("arrived.");
  ("The distance and the place are undone TOGETHER, which is the same thing the journey out");
  ("does and for the same reason. Being taken somewhere leaves the camera pressed in close on");
  ("a square, and there are two things wrong with that once it is over: how near it is, and");
  ("what it is looking at. Undone one after the other the street pulls back around that");
  ("square and then slides off it to find the player, and the second of those reads as a cut.");
  ("Asked together, the street simply opens out and the player is standing in it.");
  ("It WAS two. The camera came back to the ordinary distance holding whatever square");
  ("happened to be in the middle, and the player was put in the middle afterwards by a plain");
  ("scroll. That second half was not only a cut, it was a race: a scroll written straight to");
  ("the box can be overtaken by a journey that has not finished, and the journey places the");
  ("last frame wherever it was going. Asking for one journey to the right place removes the");
  ("cut and the race in the same line.");
  ("The playing size is asked for rather than remembered from before. What is wanted");
  ("afterwards is where this game plays, and a size saved beforehand is only that by accident");
  ("- it would faithfully restore a size some other pull-back left behind. Asking gives back");
  ("a sum the browser redoes on every window change, which is what a map that has gone back");
  ("to being played needs.");
  ("It is safe when nothing ever moved. A journey to the size the map is already at is an");
  ("ordinary scroll, and a scroll onto a player who is already in the middle goes nowhere, so");
  ("an ending that moved no camera pays for a measurement and no movement at all. That is");
  ("what lets every way of finishing ask for this same one line.");
  ("The screen is asked of the map rather than handed in, so that this and the journeys out");
  ("take the same things. A pair where one half needs something the other does not is a pair");
  ("that is easy to half-do, and the half that gets left out is always the way back.");
  let container_map = bless_camera_map_get(div_map);
  let size = bless_tile_size();
  await bless_camera_glide(container_map, div_map, player_img_c, size, player);
}
