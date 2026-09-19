import { color_oklch_read_or_null } from "./color_oklch_read_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { color_oklch_channels } from "./color_oklch_channels.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function color_parse(written) {
  "read a css colour written as hex, as rgb, or in the perceptual form into its four channels, so two spellings of one colour can be compared as numbers rather than as text. Three, four, six and eight digit hex all work, and a missing alpha means fully opaque. Anything it cannot read comes back as null, which is the honest answer for a name like transparent or currentColor.";
  "THE PERCEPTUAL FORM ARRIVES AS THE SAME FOUR CHANNELS AS EVERY OTHER FORM, WHICH IS THE WHOLE POINT OF PUTTING IT HERE RATHER THAN BESIDE HERE. Every reader of a colour in this repo - how much light it sends back, whether writing can be read on it, how it compares to a near neighbour - goes through this one door, and each of them was blind to a colour written perceptually and said so by answering nothing. Teaching the door rather than each reader is what makes all of them see it at once, and is what lets a palette written one way be checked against a palette written the other.";
  "Turned into channels rather than kept as it was written. That loses something real: the perceptual form can name colours a screen cannot show, and bringing one inside what a screen can show is a change that cannot be undone. It is the right loss, because everything downstream asks questions about what a reader will actually see, and what a reader will actually see is the brought-in colour.";
  let parsed = null;
  let perceptual = color_oklch_read_or_null(written);
  let b3 = null_is(perceptual);
  let written_perceptually = not(b3);
  if (written_perceptually) {
    let lightness = property_get(perceptual, "lightness");
    let chroma = property_get(perceptual, "chroma");
    let hue = property_get(perceptual, "hue");
    let channels = color_oklch_channels(lightness, chroma, hue);
    parsed = {
      red: property_get(channels, "red"),
      green: property_get(channels, "green"),
      blue: property_get(channels, "blue"),
      alpha: property_get(perceptual, "alpha"),
    };
    return parsed;
  }
  let hash = written.startsWith("#");
  if (hash) {
    let hex_digits = written.slice(1);
    let short = equal(hex_digits.length, 3) || equal(hex_digits.length, 4);
    if (short) {
      function each_digit(d) {
        let r = d + d;
        return r;
      }
      hex_digits = hex_digits.split("").map(each_digit).join("");
    }
    let full = equal(hex_digits.length, 6) || equal(hex_digits.length, 8);
    if (not(full)) {
      return null;
    }
    let alpha = 1;
    let has_alpha = equal(hex_digits.length, 8);
    if (has_alpha) {
      let v = hex_digits.slice(6, 8);
      let top = parseInt(v, 16);
      alpha = divide(top, 255);
    }
    let v2 = hex_digits.slice(0, 2);
    let v3 = hex_digits.slice(2, 4);
    let v4 = hex_digits.slice(4, 6);
    parsed = {
      red: parseInt(v2, 16),
      green: parseInt(v3, 16),
      blue: parseInt(v4, 16),
      alpha,
    };
    return parsed;
  }
  let inside = written.replace(/[^0-9., ]/g, "");
  function each_number(n) {
    let r2 = parseFloat(n);
    return r2;
  }
  let numbers = inside.split(",").map(each_number);
  let enough = greater_than_equal(numbers.length, 3);
  let b = numbers.slice(0, 3).some(Number.isNaN);
  let readable = enough && not(b);
  if (not(readable)) {
    return null;
  }
  let b2 = Number.isNaN(numbers[3]);
  let alpha_written = greater_than(numbers.length, 3) && not(b2);
  parsed = {
    red: numbers[0],
    green: numbers[1],
    blue: numbers[2],
    alpha: alpha_written ? numbers[3] : 1,
  };
  return parsed;
}
