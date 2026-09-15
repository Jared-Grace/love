import { arguments_assert } from "./arguments_assert.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_hero_translate_text(x, y) {
  arguments_assert(arguments, 2);
  ("A move by some pixels across and down, written the way a transform reads it.");
  let across = html_pixels_text(x);
  let down = html_pixels_text(y);
  let text = text_combine_multiple(["translate(", across, ", ", down, ")"]);
  return text;
}
