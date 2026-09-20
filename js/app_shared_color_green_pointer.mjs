import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_shared_color_green_pointer() {
  arguments_assert(arguments, 0);
  ("a green light enough to be read against a black code line, for marking one of several things a reader is being sent to look at");
  ("THE HUE IS 150 DEGREES BECAUSE OF THE TWO COLOURS IT HAS TO SIT BETWEEN, not because green is pleasant. Standing with a blue near 264 degrees and a red near 15, it is 114 from the one and 135 from the other, which is about as evenly as three hues can be spread round the wheel.");
  ("The lightness is 0.55 so that it measures 4.63 to 1 against black where the blue beside it measures 4.06. The pair is told apart by hue and not by lightness on purpose: a pair split by lightness reads as one colour and a faded copy of it, which says one of them matters more.");
  ("It sits four hundredths of lightness from the green a filled chip is painted, same hue and same chroma, which is a near miss by this repo's own colour rule and is left standing. Collapsing the two means choosing one lightness for both a black line and a pale card, and that is a judgment about colour rather than about how a colour is written down.");
  let color = color_oklch(0.55, 0.15, 150);
  return color;
}
