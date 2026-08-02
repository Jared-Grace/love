import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_typing_dots(container) {
  "three softly pulsing dots — an IN-FICTION 'the person is gathering their words' typing indicator (NOT the technical loading spinner, which would read as 'the app is working'). staggers each dot's pulse so they ripple left-to-right";
  html_style_head(
    "@keyframes g_typing_dot { 0%, 60%, 100% { opacity: 0.25; } 30% { opacity: 1; } }",
  );
  let row = html_div(container);
  html_style_assign(row, {
    display: "flex",
    gap: app_shared_content_edge_gap(),
    "justify-content": "center",
    padding: "0.35em 0",
  });
  let delays = ["0s", "0.2s", "0.4s"];
  function place_dot(delay) {
    let dot = html_div(row);
    let animation = text_combine_multiple([
      "g_typing_dot 1.4s ease-in-out ",
      delay,
      " infinite",
    ]);
    html_style_assign(dot, {
      width: "0.6em",
      height: "0.6em",
      "border-radius": "50%",
      background: "#3a3a3a",
      animation,
    });
  }
  each(delays, place_dot);
  return row;
}
