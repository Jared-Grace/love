import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_video_picture_light_lut(picture) {
  "$plain picture";
  "What the render's light step does to each of the 256 brightness levels of one picture, as a list from the level going in to the level coming out.";
  "IT IS THE RENDER TOOL'S OWN SUM, SO A SCREEN CAN SHOW THE PICTURE AS THE VIDEO WILL. The tool pulls a level away from the middle by the contrast, adds the brightness, then bends it by one over the gamma; anything at or below nothing is black and anything at or past one is white. Written any other way, a reviewer would be judging a lift the video never makes.";
  "A NUMBER THE DOCUMENT DOES NOT GIVE IS THE ONE THAT CHANGES NOTHING, the same resting values the tool itself starts from.";
  arguments_assert(arguments, 1);
  let brightness = number_is(picture.brightness) ? picture.brightness : 0;
  let contrast = number_is(picture.contrast) ? picture.contrast : 1;
  let gamma = number_is(picture.gamma) ? picture.gamma : 1;
  let lut = [];
  let i = 0;
  while (less_than(i, 256)) {
    let left = divide(i, 255);
    let right = subtract(left, 0.5);
    let v = multiply(contrast, right) + 0.5 + brightness;
    let out = 0;
    if (greater_than(v, 0)) {
      let divided = divide(1, gamma);
      let bent = Math.pow(v, divided);
      let p = multiply(256, bent);
      out = greater_than_equal(bent, 1) ? 255 : floor(p);
    }
    lut.push(out);
    i = i + 1;
  }
  return lut;
}
