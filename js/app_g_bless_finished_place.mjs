import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_lit_box } from "./app_g_bless_lit_box.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { app_g_bless_finished_white } from "./app_g_bless_finished_white.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_bless_finished_glow } from "./app_g_bless_finished_glow.mjs";
import { app_g_bless_finished_bloom } from "./app_g_bless_finished_bloom.mjs";
import { app_g_bless_finished_bloom_fade } from "./app_g_bless_finished_bloom_fade.mjs";
import { app_g_bless_finished_glow_fade } from "./app_g_bless_finished_glow_fade.mjs";
import { app_g_bless_finished_white_fade } from "./app_g_bless_finished_white_fade.mjs";
export async function app_g_bless_finished_place(
  div_map,
  player_img_c,
  tiles,
  ground_show,
) {
  arguments_assert(arguments, 4);
  ("The house's moment. The camera goes to the patch of ground that has just been filled");
  ("in, the house appears on the map, the squares wash white, a light comes up out of their");
  ("own shape, and a round bloom opens past the edges of the screen before all three let go");
  ("together.");
  ("This is the big one, and it comes last on purpose. A prayer that finished a house lit");
  ("faces on the way, and faces are the small change of this game while a finished house");
  ("is the rare thing. Shown first the house would be the climax arriving before the");
  ("build-up; shown last it is what the whole sequence was walking towards.");
  ("The camera is aimed at the middle of the ground and at nothing else. Ground holds");
  ("still, so it can be aimed at safely - which is exactly what a person cannot promise.");
  ("The house is put onto the map AFTER the camera has finished travelling and before the");
  ("first white, which is the one gap in the whole sequence where it can go. Drawn any");
  ("earlier it turns gold somewhere off the side of the screen and the player arrives to");
  ("find it already done - the answer given while they are still being carried towards the");
  ("question. Drawn any later the white flashes over a square with nothing underneath it,");
  ("and the light coming back off it reveals an empty street.");
  ("It is drawn and covered over within the same breath, and that is meant. What the player");
  ("watches is the camera settling, then the ground turning white, then the white letting go");
  ("to leave a house standing lit - so the gold arrives as the RESULT of the flash rather");
  ("than as something that happened before it.");
  ("Three lights rather than one, because the ground here is not one colour and no single");
  ("light reads on all of it. The wash says WHICH squares; the glow says they are lit; the");
  ("bloom is the only part that leaves the shape, and it can, because it has no edge.");
  ("They are let go together and then waited out by the clock. Together, because they are");
  ("one thing seen three ways and a staggered ending would read as three things stopping.");
  let box = app_g_bless_lit_box(tiles);
  let middle = property_get(box, "middle");
  await app_shared_game_player_center(middle, player_img_c, div_map);
  ground_show();
  let squares = app_g_bless_finished_white(div_map, tiles);
  await sleep(560);
  let glow = app_g_bless_finished_glow(div_map, tiles);
  await sleep(340);
  let bloom = app_g_bless_finished_bloom(div_map, middle);
  await sleep(300);
  app_g_bless_finished_bloom_fade(bloom);
  app_g_bless_finished_glow_fade(glow);
  app_g_bless_finished_white_fade(squares);
  await sleep(900);
}
