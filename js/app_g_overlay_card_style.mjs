import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_overlay_card_style(card) {
  "the shared dark CARD styling for the prayer-family overlays (#discern prayer-wait, #dove HS-warning, thanksgiving) — one place for the rounded corners, padding, shadow, and column layout so the overlays match";
  html_style_assign(card, {
    background: "rgba(0, 0, 0, 0.55)",
    "border-radius": "5rem",
    padding: "1.75rem 2.25rem",
    "max-width": "88vw",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "0.85rem",
    "box-shadow": "0 0 2.5rem 1.75rem rgba(0, 0, 0, 0.55)",
  });
}
