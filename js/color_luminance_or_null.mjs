import { arguments_assert } from "./arguments_assert.mjs";
import { color_linear_read } from "./color_linear_read.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function color_luminance_or_null(written) {
  arguments_assert(arguments, 1);
  ("how much light a colour sends back, on the scale readability is worked out on - nought for black and one for white - or nothing at all when the colour cannot be read");
  ("NOT THE SAME AS HOW LIGHT IT LOOKS, AND THAT IS THE WHOLE REASON THIS IS NOT DONE BY EYE. Green sends back seven times the light of blue at the same digits, so a green and a blue that look a pair on a screen are nowhere near a pair to read against. Every rule about whether writing can be read on a background is worked out from this number and not from the digits themselves.");
  ("The three amounts of light are read one name along, and the only thing left here is the weighing. The straightening used to be written out inside this, which put the way from a digit to light in a file that never said the way back existed; both directions now stand under their own names beside each other.");
  ("The weights are not a choice made here. They are how much each of the three contributes to how bright a person finds the result, and green carries nearly three quarters of it on its own.");
  ("A colour it cannot read comes back as nothing rather than as a guess, and every caller is asking in order to check something, so nothing is a fault at the asking end and never a colour passed over.");
  let light = color_linear_read(written);
  let unreadable = null_is(light);
  if (unreadable) {
    return null;
  }
  let red = list_get(light, 0);
  let green = list_get(light, 1);
  let blue = list_get(light, 2);
  let weighted_red = multiply(red, 0.2126);
  let weighted_green = multiply(green, 0.7152);
  let weighted_blue = multiply(blue, 0.0722);
  let left = add(weighted_red, weighted_green);
  let value = add(left, weighted_blue);
  return value;
}
