import { app_g_day_start } from "./app_g_day_start.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_convert } from "./app_g_day_convert.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
import { each_async } from "./each_async.mjs";
export async function app_g_day_baptisms_collect_start(div_map) {
  "open the map at the END of a day of witnessing: the same three people the witnessing day chooses, two of whom have already believed today, and one still to be reached. the player finishes that last one, then gathers the day's believers and walks them to the water";
  "it does not describe that ending, it PLAYS one. the day is begun by the same code the real game begins a day with, and then two of its conversations are simply run - so the state the player finds is a state the game can actually be in, rather than one this route knows how to draw";
  "two conversations run means the sky is two thirds of the way from sunrise to sunset before the player has done anything, which is the late afternoon light this whole flow happens in - nothing here sets the sky, it is already what having done the work makes it";
  await app_g_day_start(div_map);
  let state = app_g_day_state();
  let talkable = property_get(state, "talkable");
  ("the list is copied by taking from it, because converting somebody takes them OUT of the day's talkable list - walking the list being edited would step over the second person");
  let already = list_take(talkable, 2);
  async function convert(npc) {
    await app_g_day_convert(div_map, npc);
  }
  await each_async(already, convert);
}
