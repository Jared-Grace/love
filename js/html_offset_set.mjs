import { arguments_assert } from "./arguments_assert.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { html_style_position_relative } from "./html_style_position_relative.mjs";
import { html_style_top } from "./html_style_top.mjs";
export function html_offset_set(component, x, y) {
  arguments_assert(arguments, 3);
  ("show a piece a given distance from where it belongs, at once and with nothing slowed: it keeps the room it was given and only what is seen of it moves");
  ("Held away from its place rather than drawn shifted, because a run of lettering in the middle of a sentence has no box of its own to draw shifted - a word, a space, a number are only where the sentence has reached, and every asking to draw one of them somewhere else is quietly ignored. That is a movement nobody sees, with nothing anywhere to say it was refused.");
  ("Says nothing about how long anything takes. Placing a piece and moving it there over a while are two different things, and a move is this said twice with a while set between the two sayings.");
  html_style_position_relative(component);
  let left = html_pixels_text(x);
  html_style_left(component, left);
  let top = html_pixels_text(y);
  html_style_top(component, top);
}
