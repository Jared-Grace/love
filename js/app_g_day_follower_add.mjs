import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_add } from "./list_add.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_g_day_follower_move } from "./app_g_day_follower_move.mjs";
import { less_than } from "./less_than.mjs";
export function app_g_day_follower_add(npc) {
  "a believer joins the line: they stop being somebody the player still has to go and gather, and start walking behind the player instead";
  "the two lists are one list of people cut in two by where they are, so somebody is only ever in one of them - moving a person from the first to the second is the whole of being collected, and nothing else has to be told";
  "and they GET IN LINE there and then, rather than standing where they believed until the player next takes a step. their place is the back of it, which is the tile of the day's trail as far back as the line is long - free by construction, because the people ahead of them are standing on all the tiles before it";
  "no delay on that one move: the line is not stepping, one person is joining it, and there is nobody behind them to wait for";
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
    app_g_day_follower_move(npc, to, 0);
  }
}
