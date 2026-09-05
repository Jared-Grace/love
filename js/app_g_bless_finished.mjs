import { bless_blocks_roof_tiles } from "./bless_blocks_roof_tiles.mjs";
import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
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
      faces_show,
    );
  }
  ("The quiet gold that a prayed-for face keeps is let go INSIDE the face celebration now,");
  ("part way through it, so that it rises underneath the blue rather than after it. Which");
  ("moment that is depends on how those lights are run, and that is the business of the");
  ("half that runs them - which is why it is handed the release rather than told when.");
  ("Asked for again here, and asked for whether or not there were any faces. With none there");
  ("is nobody being held and this costs a draw of a picture that has not changed; with faces");
  ("it has already happened and asks for what is already true. One line that always runs");
  ("cannot be the line somebody forgot to reach on the path where it mattered, and that is");
  ("worth a wasted draw.");
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
  ("The celebration is told which squares are ROOF rather than working it out from the shape");
  ("it was handed. What arrives here is a flat list of coordinates with nothing on it saying");
  ("which part of a house each one is, and the top row of a patch is not a safe guess for it");
  ("- a downstairs family owns one row of front wall, and that row is the top of its own");
  ("patch while being no part of any roof.");
  let blocks = property_get(world, "blocks");
  let roofs = bless_blocks_roof_tiles(blocks);
  let roof_is = g_coordinates_member_is(roofs);
  let ground = list_empty_not_is(tiles);
  if (ground) {
    await app_g_bless_finished_place(
      container_map,
      div_map,
      player_img_c,
      tiles,
      ground_show,
      roof_is,
    );
  }
  let ground_none = not(ground);
  if (ground_none) {
    ground_show();
  }
  let player = property_get(world, "player");
  ("THE WAY BACK OUT BELONGS TO LEAVING, and it sets off the moment the panel does. The");
  ("ground half arrives close and stays close, so the house is still burning at arms length");
  ("when the panel over it says what the prayer did - which is what that panel is for, its");
  ("backdrop being a warm light rather than a dark one so that the street shows through it.");
  ("The journey home runs underneath the panel while the player reads, because reading");
  ("takes longer than travelling. Held back until the button was pressed, the player");
  ("pressed it and then sat through half a second of camera before the street was theirs;");
  ("set going with the panel, it is over before they look up.");
  ("Pressing the button then only puts the player back in the middle, and it WAITS on that");
  ("journey rather than racing it. A press that came before the camera had arrived would");
  ("centre them and be dragged back to the house by the frames still to come.");
  ("One journey serves every way this can end, which is why it is asked for here and not on");
  ("each path. A prayer that reached only faces leaves the camera pulled back far enough to");
  ("hold all of them; a prayer that finished a house leaves it pressed in close; a prayer");
  ("that did neither never moved it at all. Being brought back to the distance the game is");
  ("played at is the same request in all three, and it costs one measurement and no");
  ("movement at all when there was nothing to come back from.");
  ("The lights may still be going while it travels, and that is allowed: holding the map");
  ("still holds movement and not light, so a journey run over the top of a fade no longer");
  ("finishes that fade in the frame it sets off.");
  let returning = await app_g_bless_camera_span_reset(
    container_map,
    div_map,
    player_img_c,
  );
  async function back() {
    await returning;
    app_shared_game_player_center(player, player_img_c, div_map);
  }
  let told = null_not_is(line);
  if (told) {
    app_g_bless_finished_modal(container_map, line, back);
    return;
  }
  back();
}
