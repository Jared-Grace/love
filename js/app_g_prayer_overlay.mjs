import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
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
    "justify-content": "center",
    "align-items": "center",
    "z-index": "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });
  let emoji = html_p_text(div, emoji_pray());
  html_style_assign(emoji, {
    "font-size": "6rem",
    margin: "0",
  });
  html_reflow_force(div);
  html_style_set(div, "opacity", "1");
  return div;
}
