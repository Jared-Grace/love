import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_npc_walk_to } from "./app_g_npc_walk_to.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_day_followers_face } from "./app_g_day_followers_face.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_add } from "./list_add.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
export async function app_g_day_follower_add(npc) {
  "a believer joins the line: they stop being somebody the player still has to go and gather, and start walking behind the player instead";
  "the two lists are one list of people cut in two by where they are, so somebody is only ever in one of them - moving a person from the first to the second is the whole of being collected, and nothing else has to be told";
  "and they GET IN LINE there and then, rather than standing where they believed until the player next takes a step. their place is the back of it, which is the tile of the day's trail as far back as the line is long - free by construction, because the people ahead of them are standing on all the tiles before it";
  "and they WALK there, on their own feet, round the walls and round the people already in the line - the same way the player would cross that ground. sliding them straight to their place would send them through whoever is standing between, which is exactly the distance a line grows by every time somebody joins it";
  "having arrived they turn to look at whoever they are now following, and so does everybody else, because the shape of the line has changed";
  let state = app_g_day_state();
  let converts = property_get(state, "converts");
  list_remove(converts, npc);
  let followers = property_get(state, "followers");
  list_add(followers, npc);
  let index = list_size_subtract(followers, 1);
  let trail = property_get(state, "trail");
  let b = list_size(trail);
  let known = less_than(index, b);
  if (known) {
    let to = list_get(trail, index);
    let g = await app_g_game_save_get();
    await app_g_npc_walk_to(g, npc, to);
  }
  let player = await app_g_player_get();
  await app_g_day_followers_face(player);
}
