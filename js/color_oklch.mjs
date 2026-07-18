import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function color_oklch(lightness, chroma, hue) {
  "a CSS oklch() color string from a perceptual lightness (0..1), a chroma (0..~0.4), and a hue in degrees; OKLCH hue is perceptually uniform, so equal hue steps look equally spaced to the eye";
  let color = text_combine_multiple([
    "oklch(",
    text_to(lightness),
    " ",
    text_to(chroma),
    " ",
    text_to(hue),
    ")",
  ]);
  return color;
}
