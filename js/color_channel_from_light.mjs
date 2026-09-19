import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { exponent } from "./exponent.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { round } from "./round.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
export function color_channel_from_light(light) {
  arguments_assert(arguments, 1);
  ("One straightened amount of light turned into the digit a screen is handed for it - a whole number from nought to two hundred and fifty five.");
  ("THE EXACT UNDOING OF THE STRAIGHTENING INSIDE ",
    fn_name("color_luminance_or_null"),
    ", WHICH IS THE ONLY REASON A COLOUR MAY BE MEASURED ONE WAY AND WRITTEN THE OTHER AND STILL BE THE SAME COLOUR. The bend put into the digits so that the steps look even to a person has to be put back before a screen is handed them, and a pair of functions that disagree about that bend by even a little would make a colour drift a shade every time it went round.");
  ("Rounded to a whole number rather than kept as a fraction, because a digit is what a screen is given and there is no such thing as a channel of a hundred and eighty six and a half. It also puts a colour reached this way on exactly the same footing as one read out of six-digit hex, which is what lets the two be compared as equal rather than as nearly equal.");
  ("Pulled back inside the pair of limits only to mop up the last fraction of rounding. A colour genuinely beyond what a screen can show should have been brought in before it got here, by dropping its colourfulness rather than by cutting a channel off, because cutting a channel off changes the hue and dropping colourfulness does not.");
  let part = light;
  let low_end = less_than_equal(part, 0.0031308);
  let bent = 0;
  if (low_end) {
    bent = multiply(part, 12.92);
  }
  if (not(low_end)) {
    let right = divide(1, 2.4);
    let lifted = exponent(part, right);
    let scaled = multiply(1.055, lifted);
    bent = subtract(scaled, 0.055);
  }
  let full = multiply(bent, 255);
  let whole = round(full);
  let digit = math_number_clamp(whole, 0, 255);
  return digit;
}
