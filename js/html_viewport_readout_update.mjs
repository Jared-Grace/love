import { html_viewport_readout_update_each_bar } from "./html_viewport_readout_update_each_bar.mjs";
import { html_viewport_readout_update_fetch } from "./html_viewport_readout_update_fetch.mjs";
import { property_get } from "./property_get.mjs";
import { html_viewport_readout_update_box } from "./html_viewport_readout_update_box.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export function html_viewport_readout_update(state, round_to, probes, box) {
  arguments_assert(arguments, 4);
  let viewport = window.visualViewport;
  let bars = html_viewport_readout_update_each_bar(state, round_to);
  ("the five things reaching furthest right, when any reaches past the screen, are listed too, because opening the last lesson group on a phone made the page 429 wide on a 414 screen, 2026-09-28 - the browser then widened its frame to fit, the frame grew taller than the screen, and the bar held to the frame top slid above what is seen. Which thing sticks out is only known on the phone, where the text is drawn larger");
  let r = html_viewport_readout_update_box(
    bars,
    round_to,
    probes,
    viewport,
    box,
  );
  let text = property_get(r, "text");
  let lines = property_get(r, "lines");
  let n = property_get(r, "n");
  ("each reading that differs from the last is also sent to the dev server, which files it (",
    fn_name("viewport_readout_record"),
    "), so the numbers reach the developer without a picture of them. A failed send is dropped: this page only exists to be read, and it keeps showing the numbers either way");
  if (equal(text, state.sent)) {
    return;
  }
  state.sent = text;
  ("the time is added only to what is sent, never to what is compared, because it differs every tick - compared, it sent a reading four times a second and the page never went quiet");
  html_viewport_readout_update_fetch(lines, round_to, n);
}
