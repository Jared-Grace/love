import { app_g_view_render_study_r } from "./app_g_view_render_study_r.mjs";
import { app_g_view_render_study_render_pray_gate } from "./app_g_view_render_study_render_pray_gate.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_view_render_study(div_map) {
  let view = await app_g_view_get();
  let text = property_get(view, "text");
  let r = app_g_view_render_study_r(view, text, div_map);
  let fresh = property_get(r, "fresh");
  let render_words = property_get(r, "render_words");
  let container = property_get(r, "container");
  if (fresh) {
    app_g_view_render_study_render_pray_gate(container, render_words);
  } else {
    render_words();
  }
}
