import { app_g_bless_finished_home_arrive } from "./app_g_bless_finished_home_arrive.mjs";
import { html_remove } from "./html_remove.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_lit_box } from "./app_g_bless_lit_box.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_tile_size } from "./app_g_bless_tile_size.mjs";
import { app_g_bless_camera_glide } from "./app_g_bless_camera_glide.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_bless_finished_white } from "./app_g_bless_finished_white.mjs";
import { app_g_bless_finished_glow } from "./app_g_bless_finished_glow.mjs";
import { app_g_bless_finished_bloom } from "./app_g_bless_finished_bloom.mjs";
import { app_g_bless_finished_bloom_fade } from "./app_g_bless_finished_bloom_fade.mjs";
import { app_g_bless_finished_glow_fade } from "./app_g_bless_finished_glow_fade.mjs";
import { app_g_bless_finished_white_fade } from "./app_g_bless_finished_white_fade.mjs";
export async function app_g_bless_finished_place(
  container_map,
  div_map,
  player_img_c,
  tiles,
  ground_show,
) {
  arguments_assert(arguments, 5);
  ("The house's moment. The camera goes to the patch of ground that has just been filled");
  ("in, the street is held still for a moment as it was, the house appears on the map, the");
  ("squares wash white, a light comes up out of their own shape, and a round bloom opens");
  ("past the edges of the screen before all three let go together.");
  ("This is the big one, and it comes last on purpose. A prayer that finished a house lit");
  ("faces on the way, and faces are the small change of this game while a finished house");
  ("is the rare thing. Shown first the house would be the climax arriving before the");
  ("build-up; shown last it is what the whole sequence was walking towards.");
  ("The camera is aimed at the middle of the ground and at nothing else. Ground holds");
  ("still, so it can be aimed at safely - which is exactly what a person cannot promise.");
  ("Coming in close and travelling here are ONE motion. The faces before this were held on");
  ("a screen pulled back far enough to fit all of them, so there are two things to undo: a");
  ("distance and a place. Done one after the other the player watches the street rush in on");
  ("wherever the last face happened to be and then slide off to the house, and the first of");
  ("those two moves is about nothing at all. Asked together, the screen simply arrives.");
  ("The size named is the ordinary one this game is played at, so the house is celebrated");
  ("at the distance the street is normally read from and the player is already standing at");
  ("the right distance when it is over.");
  ("The still moment after the camera lands and before anything lights is the whole point");
  ("of that pause, and it is not politeness. A change can only be watched happening if the");
  ("player saw what it was before: with the light starting on the same frame the travel");
  ("stopped, the eye was still catching up with the journey and arrived to find the house");
  ("already going gold, which reads as having missed it. Half a second of an unchanged");
  ("street costs nothing and buys the before-picture that makes the after mean anything.");
  ("The house is put onto the map AFTER that pause and before the first white, which is");
  ("the one gap in the whole sequence where it can go. Drawn any earlier it turns gold");
  ("somewhere off the side of the screen and the player arrives to find it already done -");
  ("the answer given while they are still being carried towards the question. Drawn any");
  ("later the white flashes over a square with nothing underneath it, and the light coming");
  ("back off it reveals an empty street.");
  ("It is drawn and covered over within the same breath, and that is meant. What the player");
  ("watches is the camera settling, then the ground turning white, then the white letting go");
  ("to leave a house standing lit - so the gold arrives as the RESULT of the flash rather");
  ("than as something that happened before it.");
  ("Three lights rather than one, because the ground here is not one colour and no single");
  ("light reads on all of it. The wash says WHICH squares; the glow says they are lit; the");
  ("bloom is the only part that leaves the shape, and it can, because it has no edge.");
  ("Each is given long enough to finish arriving before the next one starts. They are");
  ("stages of one event and not a chord, and a stage begun over the top of one still coming");
  ("up is a stage the player never sees begin - which is the same complaint the pause above");
  ("answers, made about the middle of the sequence instead of the start of it.");
  ("They are let go together and then waited out by the clock. Together, because they are");
  ("one thing seen three ways and a staggered ending would read as three things stopping.");
  let box = app_g_bless_lit_box(tiles);
  let middle = property_get(box, "middle");
  let size = app_g_bless_tile_size();
  await app_g_bless_camera_glide(
    container_map,
    div_map,
    player_img_c,
    size,
    middle,
  );
  await sleep(560);
  ("The house comes up gradually, on a layer of its own, and only once it is fully up is the");
  ("street told to show it and that layer taken away. Both in the same breath, so there is");
  ("never a frame with two of the house on the map at once - these lights are see-through,");
  ("and a house painted twice over itself comes out the wrong colour.");
  let arriving = app_g_bless_finished_home_arrive(div_map, tiles);
  await sleep(1100);
  ground_show();
  html_remove(arriving);
  let squares = app_g_bless_finished_white(div_map, tiles);
  await sleep(720);
  let glow = app_g_bless_finished_glow(div_map, tiles);
  await sleep(760);
  let bloom = app_g_bless_finished_bloom(div_map, middle);
  await sleep(300);
  app_g_bless_finished_bloom_fade(bloom);
  app_g_bless_finished_glow_fade(glow);
  app_g_bless_finished_white_fade(squares);
  await sleep(900);
}
