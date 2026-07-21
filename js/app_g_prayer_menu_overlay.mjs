import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_prayer_menu_overlay() {
  "the full-screen dark overlay that holds a prayer MENU laid out like a conversation turn — shared (DRY) by the spontaneous gratitude menu and the conversation-closing prayer turn: dim backdrop, centered stretch column";
  let overlay = html_body_div();
  html_style_assign(overlay, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    gap: "1rem",
    padding: "1vw",
    "box-sizing": "border-box",
    "z-index": "1000",
  });
  return overlay;
}
