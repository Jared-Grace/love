import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npc_unconverted_random } from "./app_g_npc_unconverted_random.mjs";
import { property_get } from "./property_get.mjs";
import { g_gender_pronouns } from "./g_gender_pronouns.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { property_list_get } from "./property_list_get.mjs";
import { property_set } from "./property_set.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_dev_routes_npc_view_of } from "./app_g_dev_routes_npc_view_of.mjs";
export async function app_g_dev_routes_quick() {
  arguments_assert(arguments, 0);
  ("the #quick dev route: open an unbeliever whose conversation is trimmed to ONLY the gospel-share turn, so answering that one objection lands straight on the closing prayer that converts — the fast path to test convert-on-gospel-share without walking the how-are-you and believe turns first.");
  let npc = await app_g_npc_unconverted_random();
  let gender = property_get(npc, "gender");
  let pronouns = g_gender_pronouns(gender);
  let full = g_conversation_generate(pronouns);
  let gospel = property_list_get(full, "turns", 0);
  ("the conversation the game generated is NARROWED here, never rebuilt. it used to be replaced with a fresh object spelling out the two fields this route cares about, which made this the second place that knew what a conversation is made of - so a field the generator started adding was simply absent here, and the screen under test was one the game could no longer produce.");
  property_set(full, "turns", [gospel]);
  property_set(full, "converts", true);
  let key = g_conversation_key();
  property_set(npc, key, full);
  let phase = app_g_view_phase_conversation();
  await app_g_dev_routes_npc_view_of(npc, phase);
}
