import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
import { app_g_sky_phase_write } from "./app_g_sky_phase_write.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_g_day_conversation_demo(div_map) {
  "the #day_conversation test panel: a stub conversation of 12 HALF-TURNS whose each advance walks the sky one 2-hour step across a full day (midnight → sunrise → noon → sunset → back to midnight), so you can watch the light change PER HALF-TURN — including the fast-dark + long dark plateau of the reshaped night (g_clock_sky_phase). sibling of #day_unbelievers under the 'day' group; proves the conversation→time half-turn mechanic that the real conversation will drive. BESPOKE (DOM / closure) — do NOT auto-canonicalize";
  let total = 12;
  let turn = {
    n: 0,
  };
  let body = html_document_body();
  let panel = html_div(body);
  html_style_assign(panel, {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100vw",
    "box-sizing": "border-box",
    padding: "0.75rem",
    background: "rgba(0, 0, 0, 0.75)",
    color: "white",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    gap: "0.5rem",
    "z-index": "2000",
  });
  let label = html_p_text(panel, "");
  html_style_assign(label, {
    margin: "0",
    "font-size": "1.15rem",
  });
  async function refresh() {
    let hour = turn.n / total * 24;
    let phase = g_clock_sky_phase(hour);
    await app_g_sky_phase_write(phase);
    let text = text_combine_multiple([
      "Half-turn ",
      turn.n,
      " / ",
      total,
      "  —  ",
      hour,
      ":00",
    ]);
    label.textContent = text;
  }
  async function next() {
    turn.n = turn.n + 1;
    if (turn.n > total) {
      turn.n = 0;
    }
    await refresh();
  }
  let button = html_button(panel, "Next half-turn ›", next);
  html_style_assign(button, {
    background: "white",
    color: "black",
    border: "none",
    padding: "0.6rem 1.4rem",
    "border-radius": "0.5rem",
    "font-size": "1.2rem",
    "font-weight": "bold",
    cursor: "pointer",
  });
  await refresh();
}
