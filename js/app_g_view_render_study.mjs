import { app_g_view_render_study_render_words } from "./app_g_view_render_study_render_words.mjs";
import { app_g_view_render_study_render_pray_gate } from "./app_g_view_render_study_render_pray_gate.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_view_render_study(div_map) {
  let view = await app_g_view_get();
  let r2 = app_g_view_render_study_render_words(view, div_map);
  let render_words = property_get(r2, "render_words");
  let fresh = property_get(r2, "fresh");
  let r = property_get(r2, "r");
  let container = property_get(r, "container");
  if (fresh) {
    app_g_view_render_study_render_pray_gate(container, render_words);
  } else {
    render_words();
  }
}
