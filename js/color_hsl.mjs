import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function color_hsl(hue, saturation, lightness) {
  "a CSS hsl() color string from a hue in degrees and a saturation and lightness each given as a percent 0..100";
  let color = text_combine_multiple([
    "hsl(",
    text_to(hue),
    ", ",
    text_to(saturation),
    "%, ",
    text_to(lightness),
    "%)",
  ]);
  return color;
}
