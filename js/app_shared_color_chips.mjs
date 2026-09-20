import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_shared_color_chips() {
  arguments_assert(arguments, 0);
  ("four categorical colours for telling one thing from another at a glance - a red, a green, a blue and an amber, hand-picked to be as distinct and as familiar as possible rather than spread evenly round the wheel");
  ("ANSWERED AS A LIST BECAUSE NOTHING WANTS ONE OF THEM BY ITSELF, and because whatever counts them must not be able to disagree with whatever uses them. Told four, a check would go on checking four the day a fifth arrived, and would pass while saying nothing about the colour that was actually added. Asked for the list, it checks whatever is here. Lift one out under its own name the moment a second reader wants exactly one - never by its place in the list, because the order these happen to be written in is not a name for what sits there.");
  ("They sit at about 0.5 of lightness, which is what lets a tile in one of them carry white lettering and still stand on a pale ground.");
  ("WHAT IS KNOWN TO BE WRONG WITH THEM IS WRITTEN WHERE THEY ARE DRAWN AND NOT HERE - the amber's three shortfalls of contrast, the two pairs that collapse for readers who do not see every hue, and the hues already tried and ruled out. It is one long reading with its own measurements, and copying a summary of it up here would give it a second place to go stale in. Every one of those faults is a judgment about colour waiting on somebody who has worked in colour, so nothing in this list may change quietly while that waits.");
  let red = color_oklch(0.5, 0.2, 25);
  let green = color_oklch(0.51, 0.15, 150);
  let blue = color_oklch(0.5, 0.15, 255);
  let amber = color_oklch(0.58, 0.16, 56.38);
  let colors = [red, green, blue, amber];
  return colors;
}
