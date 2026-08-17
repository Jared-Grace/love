import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { property_set } from "./property_set.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_g_conversation_sky_target } from "./app_g_conversation_sky_target.mjs";
import { g_phase_time } from "./g_phase_time.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { g_gender_pronouns } from "./g_gender_pronouns.mjs";
export async function app_g_conversation_pronouns(prayer, npc) {
  arguments_assert(arguments, 2);
  let player = await app_g_player_get();
  property_set(player, "conversed", true);
  let property_name = g_conversation_key();
  property_set(prayer, property_name, false);
  let meet = property_get(npc, "meet");
  if (not(meet)) {
    property_set(npc, "meet", true);
  }
  let name_player = property_get(player, "name");
  let phase_open = app_g_conversation_sky_target(0);
  let time_open = g_phase_time(phase_open);
  let christian = property_get(npc, "christian");
  let greeting = g_greeting(meet, name_player, time_open, christian);
  let npc_gender = property_get(npc, "gender");
  let pronouns = g_gender_pronouns(npc_gender);
  let r = {
    meet,
    christian,
    greeting,
    pronouns,
  };
  return r;
}
