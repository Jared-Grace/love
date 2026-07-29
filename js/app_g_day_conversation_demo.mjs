import { app_g_conversation } from "./app_g_conversation.mjs";
import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_day_conversation_demo() {
  ("the #day_conversation route: open a REAL unbeliever conversation (not a stub stepper), so you actually go THROUGH a conversation and watch the working day age. its per-turn sky drift now rides the clock-anchored day 6 AM sunrise → 7 PM dusk (",
    app_g_conversation.name,
    " on_correct → ",
    g_day_sky_phase.name,
    "), so each answered turn steps the light a little further into evening. picks any unconverted npc and hands it to the same view path the tapped-npc game uses");
  let npcs = await app_g_npcs_get();
  let unconverted = list_filter_object_includes(npcs, {
    christian: false,
  });
  let npc = list_random_item(unconverted);
  let view = {
    kind: app_g_view_kind_npc(),
    x: property_get(npc, "x"),
    y: property_get(npc, "y"),
    phase: app_g_view_phase_conversation(),
  };
  await app_g_view_set(view);
}
