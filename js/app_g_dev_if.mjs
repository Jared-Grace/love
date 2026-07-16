import { html_hash_get } from "./html_hash_get.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { app_g_view_phase_conversation } from "./app_g_view_phase_conversation.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
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
  if (hash === "#conversation") {
    let npcs = await app_g_npcs_get();
    let npc = list_random_item(npcs);
    view = {
      kind: app_g_view_kind_npc(),
      x: property_get(npc, "x"),
      y: property_get(npc, "y"),
      phase: app_g_view_phase_conversation(),
    };
  }
  if (null_is(view)) {
    return;
  }
  let current = await app_g_view_get();
  let already = false;
  if (not(null_is(current))) {
    already = property_get(current, "kind") === property_get(view, "kind");
  }
  if (not(already)) {
    await app_g_view_set(view);
  }
}
