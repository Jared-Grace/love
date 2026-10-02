import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch_linear } from "./color_oklch_linear.mjs";
import { color_linear_in_gamut } from "./color_linear_in_gamut.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { divide } from "./divide.mjs";
import { color_channel_from_light } from "./color_channel_from_light.mjs";
export function color_oklch_channels(lightness, chroma, hue) {
  arguments_assert(arguments, 3);
  ("The three digits a screen is handed for a colour named by its perceptual lightness, its colourfulness and its hue. A colour the screen cannot show is brought inside what it can, and the answer is always three whole numbers from nought to two hundred and fifty five.");
  ("A COLOUR TOO STRONG TO SHOW LOSES COLOURFULNESS AND KEEPS ITS LIGHTNESS AND ITS HUE, WHICH IS WHAT A BROWSER DOES AND IS NOT WHAT CUTTING THE CHANNELS OFF DOES. Cutting a channel off is one line and it was rejected on a measurement, not on taste. Of the four colours this repo writes in this form, two ask for more than a screen has. Cut off, the amber reads as four and a half to one against white; brought in properly it reads as four and a half short by a hair. That is the line a gate draws for lettering, so the cheap version turns a colour that just fails into a colour that just passes, and the gate goes quiet about the only colour it had something to say about.");
  ("The green moves the other way, reading low when cut off rather than high, so the two faults do not even point the same direction and no single fudge covers both. The largest gap measured between the two ways was one and three tenths of a percent of the ratio - small, and sitting exactly where a threshold is, which is the only place small matters.");
  ("The colourfulness is found by halving rather than by a formula, because the edge of what a screen can show is a shape with no tidy equation for it at a given lightness and hue. Twenty halvings settle it to within a few ten-millionths, and a digit changes at a few thousandths, so the search is finished long before the answer could round differently.");
  ("The halvings are counted rather than walked over a list of their own numbers, because nothing inside a halving wants to know which halving it is. A list built only to be stepped through binds a name on every pass that no line reads, and a name nothing reads reads as an answer somebody forgot to use.");
  let linear = color_oklch_linear(lightness, chroma, hue);
  let showable = color_linear_in_gamut(linear);
  if (not(showable)) {
    let low = 0;
    let high = chroma;
    let halvings = 20;
    let step = 0;
    while (less_than(step, halvings)) {
      let total = add(low, high);
      let middle = divide(total, 2);
      let tried = color_oklch_linear(lightness, middle, hue);
      let fits = color_linear_in_gamut(tried);
      if (fits) {
        low = middle;
      }
      if (not(fits)) {
        high = middle;
      }
      step = add(step, 1);
    }
    linear = color_oklch_linear(lightness, low, hue);
  }
  function each_light(light) {
    "one of the three lights, as the digit a screen is handed for it";
    let digit = color_channel_from_light(light);
    return digit;
  }
  let digits_seen = linear.map(each_light);
  let channels = {
    red: digits_seen[0],
    green: digits_seen[1],
    blue: digits_seen[2],
  };
  return channels;
}
