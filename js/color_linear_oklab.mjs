import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
import { list_get } from "./list_get.mjs";
export function color_linear_oklab(light) {
  arguments_assert(arguments, 1);
  ("three amounts of light, placed in the space where the distance between two colours is roughly how different they look to a person - a lightness, and two numbers saying which way from grey and how far");
  ("THE POINT OF MOVING A COLOUR HERE IS THAT SUBTRACTING ONE FROM ANOTHER MEANS SOMETHING. In the amounts of light themselves, the same arithmetic difference is a glaring change at the dark end and invisible at the light end, so two pairs equally far apart by subtraction are nothing like equally far apart to look at. Here they are, near enough, and that is what lets a palette be asked whether every one of its members can be told from every other.");
  ("A COLOUR IS PULLED BACK INSIDE WHAT A SCREEN CAN SHOW BEFORE IT IS PLACED, AND LEAVING THAT OUT IS A REAL FAULT AND NOT A TIDINESS. The middle step takes a cube root, a cube root of a negative number is a negative number, and light below nought or above one therefore arrives here as a point no colour occupies - reporting two colours as further apart than any two colours can be. It reads as a strikingly good result, which is the worst way for a measurement to be wrong. Light outside the range is not a mistake upstream either: flattening a colour onto what a two-cone eye can see lands outside it routinely.");
  let value = list_get(light, 0);
  let red = math_number_clamp(value, 0, 1);
  let value2 = list_get(light, 1);
  let green = math_number_clamp(value2, 0, 1);
  let value3 = list_get(light, 2);
  let blue = math_number_clamp(value3, 0, 1);
  let long_cubed =
    multiply(0.4122214708, red) +
    multiply(0.5363325363, green) +
    multiply(0.0514459929, blue);
  let middle_cubed =
    multiply(0.2119034982, red) +
    multiply(0.6806995451, green) +
    multiply(0.1073969566, blue);
  let short_cubed =
    multiply(0.0883024619, red) +
    multiply(0.2817188376, green) +
    multiply(0.6299787005, blue);
  let long = Math.cbrt(long_cubed);
  let middle = Math.cbrt(middle_cubed);
  let short = Math.cbrt(short_cubed);
  let right = multiply(0.0040720468, short);
  let lightness = subtract(
    multiply(0.2104542553, long) + multiply(0.793617785, middle),
    right,
  );
  let left = multiply(1.9779984951, long);
  let right2 = multiply(2.428592205, middle);
  let green_red = subtract(left, right2) + multiply(0.4505937099, short);
  let right3 = multiply(0.808675766, short);
  let blue_yellow = subtract(
    multiply(0.0259040371, long) + multiply(0.7827717662, middle),
    right3,
  );
  let placed = [lightness, green_red, blue_yellow];
  return placed;
}
