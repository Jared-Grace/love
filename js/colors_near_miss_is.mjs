import { color_near_miss_threshold } from "./color_near_miss_threshold.mjs";
export function colors_near_miss_is(parsed, parsed_other) {
  "whether two already read colours are a near miss: close enough that nobody can tell them apart, yet not the same value. Equal colours are excluded on purpose — the same value written twice is a plain duplicate, which is a different finding and is caught elsewhere. Different opacities are excluded too, because the alpha is usually the job the colour is doing: a faint shadow and a solid backdrop are two decisions, not one.";
  let alpha_apart = Math.abs(parsed.alpha - parsed_other.alpha);
  let same_opacity = alpha_apart <= 0.02;
  if (!same_opacity) {
    return false;
  }
  let red_apart = Math.abs(parsed.red - parsed_other.red);
  let green_apart = Math.abs(parsed.green - parsed_other.green);
  let blue_apart = Math.abs(parsed.blue - parsed_other.blue);
  let apart = Math.max(red_apart, green_apart, blue_apart);
  let identical = apart === 0;
  if (identical) {
    return false;
  }
  let threshold = color_near_miss_threshold();
  let near = apart <= threshold;
  return near;
}
