import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_linear_read } from "./color_linear_read.mjs";
import { null_is } from "./null_is.mjs";
import { color_linear_cone_missing } from "./color_linear_cone_missing.mjs";
import { color_linear_oklab } from "./color_linear_oklab.mjs";
import { list_get } from "./list_get.mjs";
export function color_apart(written, written_other, cone) {
  arguments_assert(arguments, 3);
  ("how far apart two colours look to a reader missing the named cone - nought when they are the same colour to that reader, and about two at the furthest any two colours can be. Pass none for ordinary sight");
  ("THIS IS THE QUESTION A CONTRAST FLOOR CANNOT ASK. A contrast floor asks whether writing can be read on a background, which is about lightness and almost nothing else - two colours of the same lightness pass it against white and fail utterly at being told from each other. A palette that colour-codes things by hue lives or dies on this number instead, and a palette can clear every floor it has while two of its members have quietly become one.");
  ("The scale is worth holding onto because it has no floor written into it and this deliberately does not invent one. Around two hundredths is where two colours stop being reliably tellable apart side by side at all; what a palette needs on top of that depends on how big the coloured thing is, how far apart the two sit on the screen and how much rests on the difference - which are judgments about a design and not arithmetic.");
  ("A colour it cannot read is refused out loud rather than answered. There is no honest distance from a thing that is not a colour, and the caller is always checking something, so a number invented here would be a check reporting a result it never obtained.");
  let light = color_linear_read(written);
  let light_other = color_linear_read(written_other);
  let unreadable = null_is(light) || null_is(light_other);
  if (unreadable) {
    throw new Error(
      "color apart: cannot read " +
        written +
        " or " +
        written_other +
        " as a colour",
    );
  }
  let seen = color_linear_cone_missing(light, cone);
  let seen_other = color_linear_cone_missing(light_other, cone);
  let placed = color_linear_oklab(seen);
  let placed_other = color_linear_oklab(seen_other);
  let left = list_get(placed, 0);
  let right = list_get(placed_other, 0);
  let lightness = subtract(left, right);
  let left2 = list_get(placed, 1);
  let right2 = list_get(placed_other, 1);
  let green_red = subtract(left2, right2);
  let left3 = list_get(placed, 2);
  let right3 = list_get(placed_other, 2);
  let blue_yellow = subtract(left3, right3);
  let distance = Math.hypot(lightness, green_red, blue_yellow);
  return distance;
}
