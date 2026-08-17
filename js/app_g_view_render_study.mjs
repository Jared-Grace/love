import { property_get } from "./property_get.mjs";
import { app_g_view_render_study_container } from "./app_g_view_render_study_container.mjs";
import { app_g_view_render_study_render_words } from "./app_g_view_render_study_render_words.mjs";
import { app_g_view_render_study_render_pray_gate } from "./app_g_view_render_study_render_pray_gate.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
export async function app_g_view_render_study(div_map) {
  let view = await app_g_view_get();
  let r2 = app_g_view_render_study_render_words(view, div_map);
  let r = app_g_view_render_study_container(r2);
  let container = property_get(r, "container");
  let fresh = property_get(r, "fresh");
  let render_words = property_get(r, "render_words");
  if (fresh) {
    app_g_view_render_study_render_pray_gate(container, render_words);
  } else {
    render_words();
  }
}
