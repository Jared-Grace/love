import { app_g_bless_camera_span_reset } from "./app_g_bless_camera_span_reset.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_bless_finished_faces } from "./app_g_bless_finished_faces.mjs";
import { app_g_bless_finished_place } from "./app_g_bless_finished_place.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_g_bless_finished_modal } from "./app_g_bless_finished_modal.mjs";
export async function app_g_bless_finished(
  r,
  tiles,
  people,
  line,
  ground_show,
  faces_show,
) {
  arguments_assert(arguments, 6);
  ("The celebration after a prayer that finished something off: every face it lit, and then");
  ("the ground it filled in.");
  ("Faces first and ground last, and each shown on its own with the camera on it. They");
  ("arrived here as one event and they are still one event - the prayer - but a prayer");
  ("reaches a face where the face happens to be standing and a house where the house is,");
  ("and those are two different places. Shown at once the camera has to sit between them,");
  ("so the house lights at one edge of the screen and a face at the other and the player");
  ("watches whichever they happened to be looking at. Shown in turn, each has the middle of");
  ("the screen to itself and neither is missed.");
  ("The faces are all handed over together rather than one at a time. What holds them all");
  ("on one screen, and how far apart their lights start, is the business of the thing that");
  ("lights them - here they are one group because one prayer reached them.");
  ("Faces first because they are the smaller thing and the house is what the prayer built");
  ("up to. The order is also the truth of it: the people were prayed for, and the house is");
  ("filled in because all of them were.");
  ("Either list may be empty and neither empties this. A prayer over one person lights one");
  ("face and no ground at all; a house whose last resident was already lit fills in with no");
  ("new face to show. Whether there was anything at all to celebrate was settled before");
  ("this was called.");
  ("The words come last of all, once the street has been shown. They are about what the");
  ("player has just been given - a whole household in one prayer from now on - and a line");
  ("of text put up first is a line read instead of the thing it is about.");
  let container_map = property_get(r, "container_map");
  let div_map = property_get(r, "div_map");
  let player_img_c = property_get(r, "player_img_c");
  let world = property_get(r, "world");
  let faces = list_empty_not_is(people);
  if (faces) {
    await app_g_bless_finished_faces(
      container_map,
      div_map,
      player_img_c,
      people,
    );
  }
  ("The quiet gold that a prayed-for face keeps is put up HERE, once the arriving light on");
  ("those faces is over and gone. It is held back for exactly as long as that light lasts,");
  ("and for one reason: both marks land on the same few pixels, so shown together the");
  ("player meets what remains before what arrives and reads the pair as one mark brightening");
  ("slightly. Shown in turn there is a blue arrival and then a gold that stays, which is");
  ("what actually happened.");
  ("Asked for whether or not there were any faces. With none there is nobody being held and");
  ("this costs a draw of a picture that has not changed; with faces it is the only thing");
  ("that lets them go. One line that always runs cannot be the line somebody forgot to");
  ("reach on the path where it mattered.");
  faces_show();
  ("The newly finished house is put onto the map by the ground celebration rather than");
  ("here, and that is the whole reason this is handed a way of drawing it. It has to land");
  ("inside a gap that only that half can see: after the camera has finished travelling to");
  ("the house, and before the first white washes over it. Drawn out here it would turn gold");
  ("while the camera was still carrying the player towards it, so they would arrive to find");
  ("the answer already given.");
  ("When no ground was finished there is no camera move and no gap, and the redraw happens");
  ("here instead. It costs a draw of a picture that has not changed and buys the guarantee");
  ("that the map and the record agree again by the time this returns - which is what makes");
  ("the held-back draw safe to hold back at all.");
  let ground = list_empty_not_is(tiles);
  if (ground) {
    await app_g_bless_finished_place(
      container_map,
      div_map,
      player_img_c,
      tiles,
      ground_show,
    );
  }
  let ground_none = not(ground);
  if (ground_none) {
    ground_show();
    ("The camera is brought back in HERE when there was no house to go to, because the face");
    ("half leaves it standing wherever it had to stand to hold everybody and no longer puts");
    ("it back itself. When a house follows, that same journey is how the house is arrived at,");
    ("so it is made once; when nothing follows there is nobody to make it, and the player");
    ("would be left looking at the street from a distance they never chose.");
    await app_g_bless_camera_span_reset(container_map, div_map, player_img_c);
  }
  let player = property_get(world, "player");
  function back() {
    app_shared_game_player_center(player, player_img_c, div_map);
  }
  let told = null_not_is(line);
  if (told) {
    app_g_bless_finished_modal(container_map, line, back);
    return;
  }
  back();
}
