import { floor } from "./floor.mjs";
import { exponent } from "./exponent.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function number_text_floored(value, decimals) {
  arguments_assert(arguments, 2);
  ("a number written out to the given number of decimal places, always cut downwards rather than rounded to nearest - so the written figure is a thing the number is at least, never a thing it might not have reached");
  ("THIS IS HOW A MEASUREMENT GETS INTO A RATCHET THAT ONLY KNOWS NAMES. A ratchet holding a flat list of names refuses a name that is new and refuses a listed name that has stopped happening, which is everything wanted of a measurement too, provided the measurement is part of the name. Written in, a figure that moves either way makes a name the list does not hold and a listed name nothing produces, so both teeth bite at once and no reading can change quietly.");
  ("CUT DOWNWARDS AND NOT TO NEAREST, BECAUSE THE NAMES SAY WHETHER SOMETHING CLEARED A FLOOR. Rounded to nearest, a reading of four and forty-nine hundredths against a floor of four and a half is written four and a half, and the record then states as cleared the one thing it was keeping watch on. Cut downwards the written figure can only understate, so a name can call something short that is barely past, and never call something past that is short.");
  ("The places are the width of the band a reading may drift inside without the ratchet saying anything, so they are chosen by how finely the thing being measured matters rather than by how precisely it can be worked out. Too many and every rebuild is a change; too few and a real slide reads as no change at all.");
  let scale = exponent(10, decimals);
  let lifted = multiply(value, scale);
  let cut = floor(lifted);
  let dropped = divide(cut, scale);
  let text = dropped.toFixed(decimals);
  return text;
}
