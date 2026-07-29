import { fn_name } from "./fn_name.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function app_g_day_conversation_demo() {
  ("the #day_conversation route: open a REAL unbeliever conversation (not a stub stepper) inside a ONE-slice day session, so this single conversation IS the whole working day and its per-turn sky drift spans the full 6 AM sunrise → 7 PM dusk — a NOTICEABLE change while you go through it. that is the point of a 1-slice day: the real game runs many slices, so each conversation there only ages its own slice (",
    fn_name("app_g_conversation_sky_target"),
    " reads slices_total / slices_done). picks any unconverted npc and hands it to the same view path the tapped-npc game uses");
  let state = app_g_day_state();
  property_set(state, "slices_total", 1);
  property_set(state, "slices_done", 0);
  property_set(state, "sky_toast", true);
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
