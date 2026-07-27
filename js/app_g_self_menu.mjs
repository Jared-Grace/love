import { app_g_prayer_menu_overlay } from "./app_g_prayer_menu_overlay.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_on } from "./html_on.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_g_self_menu() {
  "the menu that opens when the player taps THEMSELF — the seed of the prayer menu (tap yourself → Pray). FOR NOW it holds a single '🛠 Dev Tools' link to the #index dev-route directory; tapping the dim backdrop closes it. reuses the shared prayer-menu overlay (dim backdrop, centered column) since this is where discernment / gratitude / general prayer will live";
  let overlay = app_g_prayer_menu_overlay();
  function close() {
    html_remove(overlay);
  }
  html_on(overlay, "click", close);
  let link = html_a_href_text(overlay, "#index", "🛠 Dev Tools");
  html_style_assign(link, {
    "align-self": "center",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "0.6rem 1.2rem",
    "border-radius": "0.5rem",
    "font-size": "1.2rem",
    "text-decoration": "none",
  });
  return overlay;
}
