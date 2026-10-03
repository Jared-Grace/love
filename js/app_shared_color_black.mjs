import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_black() {
  "Pure black, the digits behind the colour word black.";
  "It stands beside the plain white one, and the pair of them are the two colours this repo writes by name rather than by digits. Whatever reads a colour to work out light or readability needs the digits, and a word carries none, so the two names have to be able to hand theirs over.";
  "It is not what lettering or a page is painted. Both of those are near-blacks with their own reasons for being a shade off pure, said where they are named; this one is the colour itself, for arithmetic and for the few places a drawing wants nothing but black.";
  arguments_assert(arguments, 0);
  let color = "#000000";
  return color;
}
