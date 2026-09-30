import { not } from "./not.mjs";
import { html_div } from "./html_div.mjs";
import { clock_face_svg } from "./clock_face_svg.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { sleep } from "./sleep.mjs";
import { html_connected_is } from "./html_connected_is.mjs";
export function clock_face_live_draw(box) {
  "a clock face put in the box whose hands follow the time on this device, redrawn every second until the clock is taken off the page, asked by the human 2026-09-30";
  "The loop stops the first time it finds the clock no longer on the page, so leaving the screen ends it. A drawing made with no page behind it, as a check makes one, is never on a page, so it is drawn once and stops at its first look.";
  let clock = html_div(box);
  function now_draw() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let text = clock_face_svg(hour, minute, second);
    html_text_set(clock, text);
  }
  now_draw();
  async function tick() {
    while (true) {
      await sleep(1000);
      let b = html_connected_is(clock);
      if (not(b)) {
        return;
      }
      now_draw();
    }
  }
  tick();
  return clock;
}
