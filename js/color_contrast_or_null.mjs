import { arguments_assert } from "./arguments_assert.mjs";
import { color_luminance_or_null } from "./color_luminance_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { numbers_larger } from "./numbers_larger.mjs";
import { numbers_smaller } from "./numbers_smaller.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
export function color_contrast_or_null(color_a, color_b) {
  arguments_assert(arguments, 2);
  ("how far apart two colours are to read, as the number the web's readability rule is stated in: one when they are the same colour, and twenty-one for black against white");
  ("The two are not told apart into writing and background, because the answer is the same either way round. Which is in front and which behind changes nothing about whether one can be read on the other, so asking for them in an order would only be one more thing a caller could get wrong.");
  ("A small amount is added to each side before dividing. Without it black against anything is a division by nought, and the amount is what makes the scale end at twenty-one rather than running off; it is part of the rule rather than a guard bolted on.");
  ("Either colour being unreadable makes the whole answer nothing. A pair half of which is unknown has no answer, and handing back a number worked out from one side would be a guess wearing the shape of a measurement.");
  let light_a = color_luminance_or_null(color_a);
  let light_b = color_luminance_or_null(color_b);
  let unknown_a = null_is(light_a);
  let unknown_b = null_is(light_b);
  if (unknown_a || unknown_b) {
    return null;
  }
  let lighter = numbers_larger(light_a, light_b);
  let darker = numbers_smaller(light_a, light_b);
  let ratio = divide(add(lighter, 0.05), add(darker, 0.05));
  return ratio;
}
