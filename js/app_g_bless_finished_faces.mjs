import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_player_center } from "./app_shared_game_player_center.mjs";
import { app_g_bless_finished_people } from "./app_g_bless_finished_people.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_bless_finished_person_bloom } from "./app_g_bless_finished_person_bloom.mjs";
import { app_g_bless_finished_person_bloom_fade } from "./app_g_bless_finished_person_bloom_fade.mjs";
import { app_g_bless_finished_people_fade } from "./app_g_bless_finished_people_fade.mjs";
export async function app_g_bless_finished_faces(
  div_map,
  player_img_c,
  person,
) {
  arguments_assert(arguments, 3);
  ("One person's moment. The camera goes to them, the light they already carry flares");
  ("white, a round light opens out of them and runs across a few squares of street, and");
  ("both let go together into the quiet gold that stays on them.");
  ("The camera comes FIRST and it comes to the person, which is the whole reason this is");
  ("its own thing. A prayer can cover a face and a house at once, and the two are rarely");
  ("in the same place: people walk, and somebody prayed for at the corner may live three");
  ("streets away. Aimed at both together the camera stops halfway between them and shows");
  ("neither - the house washes white at one edge of the screen while a light nobody is");
  ("looking at flares at the other, and the player reads that as a light gone astray.");
  ("One thing at a time, and the camera on the one thing, is the fix.");
  ("Where they are is read once, at the top, and not followed afterwards. Chasing a");
  ("walking person with the camera is a camera the player cannot read the street from, and");
  ("both lights ride on them anyway, so they stay right whether they walk on or not.");
  ("Two lights rather than one, because one was not enough to look at. A flare the size of");
  ("a person is read as a label being stuck on a face - it says WHO, and it says nothing");
  ("about what just happened. The round light is the part that leaves them and travels, and");
  ("travel is the only thing on a screen that a person cannot help watching. The flare says");
  ("which face; the spreading says something happened to it.");
  ("The flare goes up first and the round light a moment behind it, rather than both at");
  ("once. Together they are one bright event with no story in it. In order they are a");
  ("cause and its effect: the person lights, and then the light goes out from the person -");
  ("which is also the true direction of the thing being drawn.");
  ("They are let go together, though, because they are one event seen twice and a staggered");
  ("ending would read as two separate things stopping.");
  ("It is still short, because a prayer lands every few seconds and this is the common case");
  ("rather than the rare one. Long enough now to be an event and not just a flash; still");
  ("well inside what a player will sit through over and over.");
  ("It stays smaller than a finished house, and deliberately. The house has three lights,");
  ("its own shape washing white, and a bloom that runs off every edge of the screen. Size");
  ("is the only language these two share, so a person growing to the house's size would");
  ("leave the house nothing to say.");
  ("The flare is drawn by the same hand that draws a whole houseful of them, asked for one");
  ("person. Two ways of lighting a face is two things to keep the same.");
  let one = [person];
  await app_shared_game_player_center(person, player_img_c, div_map);
  let bursts = app_g_bless_finished_people(div_map, one);
  await sleep(180);
  let bloom = app_g_bless_finished_person_bloom(div_map, person);
  await sleep(640);
  app_g_bless_finished_person_bloom_fade(bloom);
  app_g_bless_finished_people_fade(bursts);
  await sleep(760);
}
