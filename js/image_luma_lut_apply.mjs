import { round } from "./round.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function image_luma_lut_apply(pixels, lut) {
  "$plain pixels";
  "$plain lut";
  "Changes the brightness of a run of red green blue alpha bytes in place, level by level through a list of 256, leaving the colour as it was.";
  "ONLY THE BRIGHTNESS IS LOOKED UP, THE WAY A VIDEO TOOL DOES IT. The picture is read as a brightness in the video range of sixteen to two hundred and thirty-five plus two colour differences; the brightness goes through the list and the colour differences are kept, so a lifted painting keeps its hues rather than washing toward grey.";
  "KEEPING THE COLOUR DIFFERENCES MEANS THE SAME CHANGE LANDS ON ALL THREE CHANNELS, scaled from the video range back up to the full one, which is why nothing here converts back.";
  arguments_assert(arguments, 2);
  let i = 0;
  while (less_than(i, pixels.length)) {
    let red = pixels[i];
    let green = pixels[i + 1];
    let blue = pixels[i + 2];
    let level = round(
      16 +
        divide(
          multiply(65.481, red) +
            multiply(128.553, green) +
            multiply(24.966, blue),
          255,
        ),
    );
    let left = subtract(lut[level], level);
    let top = multiply(left, 255);
    let change = divide(top, 219);
    pixels[i] = red + change;
    pixels[i + 1] = green + change;
    pixels[i + 2] = blue + change;
    i = i + 4;
  }
  return pixels;
}
