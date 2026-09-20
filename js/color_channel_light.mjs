import { divide } from "./divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { exponent } from "./exponent.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function color_channel_light(digit) {
  arguments_assert(arguments, 1);
  ("one of the three digits a screen is handed, turned back into the amount of light it stands for - nought for none and one for full");
  ("What a screen is handed is bent so that the steps look even to a person, and undoing that bend is what turns a digit into an amount of light. Everything about whether writing can be read, and everything about how far apart two colours look, is worked out from light and never from the digits, because the digits are evenly spaced to the eye and unevenly spaced to a photon.");
  ("THE EXACT UNDOING OF ",
    fn_name("color_channel_from_light"),
    ", AND THE TWO HAVE TO STAY THAT WAY. A pair that disagreed about the bend by even a little would make a colour drift a shade every time it went round from digit to light and back.");
  ("It was written out inside the light-sending reader before it stood here, which meant the way round and the way back sat in different files and only one of them said it had a twin.");
  let part = divide(digit, 255);
  let shallow = less_than_equal(part, 0.04045);
  if (shallow) {
    let low = divide(part, 12.92);
    return low;
  }
  let top = part + 0.055;
  let lifted = divide(top, 1.055);
  let high = exponent(lifted, 2.4);
  return high;
}
