import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_finished_faces } from "./app_g_bless_finished_faces.mjs";
import { each_async } from "./each_async.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_bless_finished_place } from "./app_g_bless_finished_place.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_g_bless_finished_modal } from "./app_g_bless_finished_modal.mjs";
export async function app_g_bless_finished(r, tiles, people, line) {
  arguments_assert(arguments, 4);
  ("The celebration after a prayer that finished something off: every face it lit, one at");
  ("a time, and then the ground it filled in.");
  ("Faces first and ground last, and each one shown on its own with the camera on it. They");
  ("arrived here as one event and they are still one event - the prayer - but a prayer");
  ("reaches a face where the face happens to be standing and a house where the house is,");
  ("and those are two different places. Shown at once the camera has to sit between them,");
  ("so the house lights at one edge of the screen and a face at the other and the player");
  ("watches whichever they happened to be looking at. Shown in turn, each has the middle of");
  ("the screen to itself and neither is missed.");
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
  async function person_moment(person) {
    await app_g_bless_finished_faces(div_map, player_img_c, person);
  }
  await each_async(people, person_moment);
  let ground = list_empty_not_is(tiles);
  if (ground) {
    await app_g_bless_finished_place(div_map, player_img_c, tiles);
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
