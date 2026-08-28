import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { app_g_bless_finished_people } from "./app_g_bless_finished_people.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_bless_finished_people_fade } from "./app_g_bless_finished_people_fade.mjs";
export async function app_g_bless_finished_person(
  div_map,
  player_img_c,
  person,
) {
  arguments_assert(arguments, 3);
  ("One person's moment. The camera goes to them, the light they already carry flares");
  ("white, and the flare settles back into the quiet gold that stays on them.");
  ("The camera comes FIRST and it comes to the person, which is the whole reason this is");
  ("its own thing. A prayer can cover a face and a house at once, and the two are rarely");
  ("in the same place: people walk, and somebody prayed for at the corner may live three");
  ("streets away. Aimed at both together the camera stops halfway between them and shows");
  ("neither - the house washes white at one edge of the screen while a light nobody is");
  ("looking at flares at the other, and the player reads that as a light gone astray.");
  ("One thing at a time, and the camera on the one thing, is the fix.");
  ("Where they are is read once, at the top, and not followed afterwards. Chasing a");
  ("walking person with the camera is a camera the player cannot read the street from, and");
  ("the flare rides on them anyway, so it stays right whether they walk on or not.");
  ("The flare is drawn by the same hand that draws a whole houseful of them, asked for one");
  ("person. Two ways of lighting a face is two things to keep the same.");
  ("It is over quickly, because a prayer lands every few seconds and this is the common");
  ("case rather than the rare one. Long enough to see somebody light up and to see the");
  ("loud light become the quiet one; not long enough to be waited through.");
  let one = [person];
  await app_shared_game_player_center(person, player_img_c, div_map);
  let bursts = app_g_bless_finished_people(div_map, one);
  await sleep(620);
  app_g_bless_finished_people_fade(bursts);
  await sleep(340);
}
