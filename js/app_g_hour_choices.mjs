import { html_body_div } from "./html_body_div.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_sky_pill_style } from "./app_g_sky_pill_style.mjs";
import { app_g_sky_phase_write } from "./app_g_sky_phase_write.mjs";
import { g_clock_sky_phase } from "./g_clock_sky_phase.mjs";
export async function app_g_hour_choices() {
  "the #day_hours previewer's panel (dev only): a fixed grid of 24 pills, one per wall-clock hour 0..23. clicking a pill paints the sky at that hour (g_clock_sky_phase → app_g_sky_phase_write), the active pill inverts, so you can eyeball every hour — especially the dusk band past sunset (18..21) — to CHOOSE the day's cutoff. starts on 18:00 (sunset) since that is the band you're deciding. BESPOKE (loop + local highlight) — do NOT auto-canonicalize";
  let panel = html_body_div();
  html_style_assign(panel, {
    position: "fixed",
    top: "3rem",
    left: "50%",
    transform: "translateX(-50%)",
    "z-index": "2000",
    display: "grid",
    "grid-template-columns": "repeat(6, auto)",
    gap: "0.3rem",
  });
  let buttons = [];
  function restyle(active_hour) {
    for (let h = 0; h < buttons.length; h++) {
      app_g_sky_pill_style(buttons[h], h === active_hour);
    }
  }
  function make(hour) {
    async function on_click() {
      await app_g_sky_phase_write(g_clock_sky_phase(hour));
      restyle(hour);
    }
    let label = hour + ":00";
    let button = html_button(panel, label, on_click);
    app_g_sky_pill_style(button, false);
    buttons.push(button);
  }
  for (let hour = 0; hour < 24; hour++) {
    make(hour);
  }
  let start = 18;
  await app_g_sky_phase_write(g_clock_sky_phase(start));
  restyle(start);
}
