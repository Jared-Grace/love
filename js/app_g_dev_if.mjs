import { html_hash_get } from "./html_hash_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { app_g_view_phase_gospel } from "./app_g_view_phase_gospel.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_if() {
  let hash = html_hash_get();
  let view = null;
  if (hash === "#study") {
    view = {
      kind: app_g_view_kind_study(),
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds",
      word_index: 0,
    };
  }
  async function npc_view(phase) {
    let npcs = await app_g_npcs_get();
    let npc = list_random_item(npcs);
    return {
      kind: app_g_view_kind_npc(),
      x: property_get(npc, "x"),
      y: property_get(npc, "y"),
      phase,
    };
  }
  if (hash === "#conversation") {
    view = await npc_view(app_g_view_phase_conversation());
  }
  if (hash === "#gospel_share") {
    view = await npc_view(app_g_view_phase_gospel());
  }
  if (null_is(view)) {
    return;
  }
  await app_g_view_set(view);
}
