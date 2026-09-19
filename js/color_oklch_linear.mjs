import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { math_cos_degrees } from "./math_cos_degrees.mjs";
import { multiply } from "./multiply.mjs";
import { math_sin_degrees } from "./math_sin_degrees.mjs";
import { exponent } from "./exponent.mjs";
import { list_sum } from "./list_sum.mjs";
export function color_oklch_linear(lightness, chroma, hue) {
  arguments_assert(arguments, 3);
  ("The three straightened amounts of light - red, green and blue - that a colour named by its perceptual lightness, its colourfulness and its hue comes to. Each answer is on the nought-to-one scale light is weighed on, and any of the three may come back outside that scale, because the space this reads from can name colours a screen cannot show.");
  ("OUT OF RANGE IS AN ANSWER HERE AND NOT A FAULT, WHICH IS WHY NOTHING IS PULLED BACK IN AT THIS STEP. Two of the four colours this repo writes in this form ask for more green, or less blue, than a screen has, and what to do about that is a decision with a wrong answer in it - so it is made once, by name, further up, rather than quietly here by whichever line happened to round first.");
  ("The numbers are the published conversion for this space and are not tuned. They were checked by taking the three colours this repo writes as six-digit hex, measuring them into this space, and converting them back: all three returned the identical hex, which is the only test that catches a mistyped digit anywhere in the chain.");
  let across = math_cos_degrees(hue);
  let green_red = multiply(chroma, across);
  let along = math_sin_degrees(hue);
  let blue_yellow = multiply(chroma, along);
  let long_root =
    lightness +
    multiply(0.3963377774, green_red) +
    multiply(0.2158037573, blue_yellow);
  let right = multiply(0.1055613458, green_red);
  let left = subtract(lightness, right);
  let right2 = multiply(0.0638541728, blue_yellow);
  let medium_root = subtract(left, right2);
  let right3 = multiply(0.0894841775, green_red);
  let left2 = subtract(lightness, right3);
  let right4 = multiply(1.291485548, blue_yellow);
  let short_root = subtract(left2, right4);
  let cone_long = exponent(long_root, 3);
  let cone_medium = exponent(medium_root, 3);
  let cone_short = exponent(short_root, 3);
  let cones = [cone_long, cone_medium, cone_short];
  let rows = [
    [4.0767416621, -3.3077115913, 0.2309699292],
    [-1.2684380046, 2.6097574011, -0.3413193965],
    [-0.0041960863, -0.7034186147, 1.707614701],
  ];
  function row_light(row) {
    "one of the three lights, as the weighted sum of what the three kinds of cone in the eye receive";
    function weighted(weight, place) {
      let cone = cones[place];
      let term = multiply(weight, cone);
      return term;
    }
    let terms = row.map(weighted);
    let light = list_sum(terms);
    return light;
  }
  let linear = rows.map(row_light);
  return linear;
}
