import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function color_linear_in_gamut(linear) {
  arguments_assert(arguments, 1);
  ("Whether three straightened amounts of light are all ones a screen can actually send: true when every one of them lies between nought and one, false when any asks for more light than there is, or for less than none.");
  ("A colour outside this is not a mistake anybody made. The space these usually come from can name every colour a person can see, and a screen shows a slice of that, so a perfectly sensible green can sit beyond what the screen has. Asking the question by name is what lets the answer be dealt with deliberately.");
  function outside(light) {
    "one of the three, when it asks for something the screen has not got";
    let dark = less_than(light, 0);
    let bright = greater_than(light, 1);
    let out = dark || bright;
    return out;
  }
  let any_outside = linear.some(outside);
  let inside = not(any_outside);
  return inside;
}
