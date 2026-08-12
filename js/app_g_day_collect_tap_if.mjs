import { app_g_day_tap_action_if } from "./app_g_day_tap_action_if.mjs";
import { app_g_day_follower_add } from "./app_g_day_follower_add.mjs";
export async function app_g_day_collect_tap_if(npc) {
  "tapping a believer the player came back for gathers them: they step in behind the player and the group walks on. NOTHING is said - the tap is a wordless come, and them moving is the answer";
  "the words for this were already spent, at the moment they believed, where the conversation says the baptism is coming. saying it again here would be thirteen identical lines on the way to the water, one for every member of a house church";
  async function collect(person) {
    app_g_day_follower_add(person);
  }
  let collected = await app_g_day_tap_action_if(npc, "converts", collect);
  return collected;
}
