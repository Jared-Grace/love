import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
export function bible_dream_stroke_finish_show(state) {
  "Turn a finished outline into a solid thing: fill it in and thicken its line, so that the last sample of a cow is the moment a cow is there.";
  "★ IT IS THE SAME PATH AND NOT A NEW DRAWING. Nothing is added at the moment of finishing that the passage did not give - the shape that fills is precisely the shape that was traced, which is precisely the shape that was laid out faint before anything was touched. A palette whose reward for finishing was a BETTER picture than the one traced would be paying the player in strokes Scripture never gave, and the whole safety of this mechanic is that no move can do that.";
  "What the filling is for is that a line and a thing are different to look at. An outline says here is where a cow goes; a filled shape says here is a cow. The dream is meant to arrive, and something has to mark the arriving.";
  let fill = app_shared_color_blue_dark();
  html_attribute_set(state.ink, "fill", fill);
  html_attribute_set(state.ink, "stroke-width", "4");
}
