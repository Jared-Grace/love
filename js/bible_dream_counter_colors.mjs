import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { app_shared_color_blue_light } from "./app_shared_color_blue_light.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
export function bible_dream_counter_colors() {
  "The colours the ornament is drawn in, taken in turn.";
  "Three and not one, because a flourish repeated in a single colour reads as a pattern the machine is stamping out, and three taken in turn read as a hand choosing. Three and not thirty for the same reason from the other side: past a handful the eye stops seeing a scheme and starts seeing noise.";
  "None of them is the colour of the ink, and that is deliberate. The ornament must never be mistaken for the passage's own line, because it is not one - it is the answer made to it.";
  let v = app_shared_color_gold_text();
  let v2 = app_shared_color_blue_light();
  let v3 = app_shared_color_green_light();
  let r = [v, v2, v3];
  return r;
}
