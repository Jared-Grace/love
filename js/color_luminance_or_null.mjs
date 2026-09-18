import { less_than_equal } from "./less_than_equal.mjs";
import { exponent } from "./exponent.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_named_or_null } from "./color_named_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { color_parse } from "./color_parse.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
export function color_luminance_or_null(written) {
  arguments_assert(arguments, 1);
  ("how much light a colour sends back, on the scale readability is worked out on - nought for black and one for white - or nothing at all when the colour cannot be read");
  ("NOT THE SAME AS HOW LIGHT IT LOOKS, AND THAT IS THE WHOLE REASON THIS IS NOT DONE BY EYE. Green sends back seven times the light of blue at the same digits, so a green and a blue that look a pair on a screen are nowhere near a pair to read against. Every rule about whether writing can be read on a background is worked out from this number and not from the digits themselves.");
  ("The digits are straightened before they are weighed. What a screen is handed is bent so that the steps look even to a person, and undoing that bend is what turns three numbers into an amount of light. Weighing the bent digits gives an answer that is wrong in the middle of the range, which is exactly where most colours are.");
  ("Nothing is said about how see-through the colour is. A colour standing at less than full strength shows some of whatever is behind it, and what that comes to cannot be known from the colour alone - so a reader wanting that must work out the mixed colour first and ask about the result.");
  ("A colour it cannot read comes back as nothing rather than as a guess, and every caller is asking in order to check something, so nothing is a fault at the asking end and never a colour passed over.");
  let named = color_named_or_null(written);
  let spelled = written;
  let unnamed = null_is(named);
  if (not(unnamed)) {
    spelled = named;
  }
  let parsed = color_parse(spelled);
  let unreadable = null_is(parsed);
  if (unreadable) {
    return null;
  }
  function straightened(digits) {
    "one of the three digits, turned from what a screen is handed back into an amount of light";
    let part = divide(digits, 255);
    if (less_than_equal(part, 0.04045)) {
      let low = divide(part, 12.92);
      return low;
    }
    let top = add(part, 0.055);
    let lifted = divide(top, 1.055);
    let high = exponent(lifted, 2.4);
    return high;
  }
  let value = property_get(parsed, "red");
  let red = straightened(value);
  let value2 = property_get(parsed, "green");
  let green = straightened(value2);
  let value3 = property_get(parsed, "blue");
  let blue = straightened(value3);
  let weighted_red = multiply(red, 0.2126);
  let weighted_green = multiply(green, 0.7152);
  let weighted_blue = multiply(blue, 0.0722);
  let left = add(weighted_red, weighted_green);
  let light = add(left, weighted_blue);
  return light;
}
