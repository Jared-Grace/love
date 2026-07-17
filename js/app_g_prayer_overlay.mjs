import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function app_g_prayer_overlay() {
  "full-screen prayer-wait overlay: dims the world + shows a large praying emoji while waiting on God for discernment; fades in; caller removes it when the prayer is answered";
  let body = html_document_body();
  let div = html_div(body);
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    gap: "1rem",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  html_style_head(
    "@keyframes prayerGlow { 0% { text-shadow: 0 0 0.15em #ffd633; transform: scale(1); } 100% { text-shadow: 0 0 0.4em #ffffff; transform: scale(1.08); } }",
  );
  let emoji = html_p_text(div, emoji_pray());
  html_style_assign(emoji, {
    "font-size": "5rem",
    margin: "0",
    animation: "prayerGlow 1.6s ease-in-out infinite alternate",
  });
  let waiting_text = html_p_text(div, "Waiting on the Lord");
  html_style_assign(waiting_text, {
    color: "white",
    "font-size": "1.5rem",
    margin: "0",
    "text-align": "center",
    "text-shadow": "0 1px 3px rgba(0, 0, 0, 0.8)",
  });
  let verse = html_p_text(
    div,
    "“Those who wait on the Lord shall renew their strength.” — Isaiah 40:31",
  );
  html_style_assign(verse, {
    color: "white",
    "font-size": "1rem",
    "font-style": "italic",
    margin: "0",
    "max-width": "80vw",
    "text-align": "center",
    opacity: "0.85",
    "text-shadow": "0 1px 3px rgba(0, 0, 0, 0.8)",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  return div;
}
