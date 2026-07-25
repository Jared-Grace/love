import { html_connected_is } from "./html_connected_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { random_range } from "./random_range.mjs";
import { sleep } from "./sleep.mjs";
import { text_combine } from "./text_combine.mjs";
export async function html_loading_spinner_pulse(pulse, milliseconds) {
  ("breathe the outer ring in and out forever, drawing a fresh smallest radius and a fresh largest radius for every breath, so no two expansions are the same size. a css keyframe cannot do this — its two ends are fixed for all time — so the sizes are set one at a time from here and the css transition smooths each move. the loop ends by itself once the overlay is removed from the page");
  while (html_connected_is(pulse)) {
    let smallest = random_range(0.78, 0.98);
    html_style_set(pulse, "transform", text_combine(text_combine("scale(", smallest), ")"));
    await sleep(milliseconds);
    let largest = random_range(1.06, 1.34);
    html_style_set(pulse, "transform", text_combine(text_combine("scale(", largest), ")"));
    await sleep(milliseconds);
  }
}
