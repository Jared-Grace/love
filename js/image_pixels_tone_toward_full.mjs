import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { round } from "./round.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export function image_pixels_tone_toward_full(pixels, strength) {
  "Moves one picture part of the way toward using the whole range of dark and light, the whole range of colour, and strong colour, by an amount that is larger the further the picture is from that and nothing for a picture already there; the pixels are a run of red green blue alpha bytes and are changed in place.";
  "★ EACH STEP MOVES TOWARD A TARGET BY A FRACTION, NEVER ONTO IT. A night scene stays darker than a noon one and a sepia painting stays warmer than a blue one; what changes is how much of the range each leaves unused. Strength 0 changes nothing and strength 1 goes the whole way.";
  "★ THE ENDS OF THE RANGE ARE READ AS PERCENTILES AND NOT AS THE DARKEST AND LIGHTEST PIXEL, because one speck of white in a dark painting would otherwise say the range is already full.";
  "★ EACH COLOUR CHANNEL IS STRETCHED ON ITS OWN, which is what widens the range of colour: a picture tinted by yellowed varnish has its blue squeezed into a narrow band, and stretching blue on its own brings the other colours back out of the tint.";
  "★ COLOUR IS STRENGTHENED, NEVER WEAKENED, AND NEVER INVENTED. A picture already as colourful as the target keeps its colour; a grey picture stays grey, since there is no colour in it to strengthen and any added would be made up.";
  let count = divide(pixels.length, 4);
  let percentile_low = 0.005;
  let percentile_high = 0.995;
  let chroma_target = 0.3;
  let factor_most = 2;
  function histogram_ends(values_of) {
    let histogram = new Array(256).fill(0);
    for (let i = 0; less_than(i, count); i++) histogram[values_of(i)]++;
    let low = 0;
    let high = 255;
    let seen = 0;
    for (let v = 0; less_than(v, 256); v++) {
      seen += histogram[v];
      let b = multiply(count, percentile_low);
      if (greater_than_equal(seen, b)) {
        low = v;
        break;
      }
    }
    seen = 0;
    for (let v = 255; greater_than_equal(v, 0); v--) {
      seen += histogram[v];
      let right = subtract(1, percentile_high);
      let b2 = multiply(count, right);
      if (greater_than_equal(seen, b2)) {
        high = v;
        break;
      }
    }
    let r2 = {
      low,
      high,
      histogram,
    };
    return r2;
  }
  function clamp(value) {
    let b3 = round(value);
    let b4 = math_min(255, b3);
    let m = math_max(0, b4);
    return m;
  }
  function luma_at(i) {
    let j = multiply(i, 4);
    let r3 = clamp(
      multiply(pixels[j], 0.2126) +
        multiply(pixels[j + 1], 0.7152) +
        multiply(pixels[j + 2], 0.0722),
    );
    return r3;
  }
  for (let channel = 0; less_than(channel, 3); channel++) {
    function lambda(i) {
      let r4 = pixels[multiply(i, 4) + channel];
      return r4;
    }
    let ends = histogram_ends(lambda);
    let width = subtract(ends.high, ends.low);
    if (less_than(width, 1)) {
      continue;
    }
    for (let i = 0; less_than(i, count); i++) {
      let j = multiply(i, 4) + channel;
      let value = pixels[j];
      let left = subtract(value, ends.low);
      let top = multiply(left, 255);
      let stretched = divide(top, width);
      let right2 = subtract(stretched, value);
      pixels[j] = clamp(value + multiply(strength, right2));
    }
  }
  let luma = histogram_ends(luma_at);
  let cumulative = new Array(256).fill(0);
  let running = 0;
  for (let v = 0; less_than(v, 256); v++) {
    running += luma.histogram[v];
    let left2 = divide(running, count);
    cumulative[v] = multiply(left2, 255);
  }
  let chroma_total = 0;
  for (let i = 0; less_than(i, count); i++) {
    let j = multiply(i, 4);
    let y = luma_at(i);
    let left3 = divide(strength, 2);
    let right3 = subtract(cumulative[y], y);
    let shift = multiply(left3, right3);
    pixels[j] = clamp(pixels[j] + shift);
    pixels[j + 1] = clamp(pixels[j + 1] + shift);
    pixels[j + 2] = clamp(pixels[j + 2] + shift);
    let most = Math.max(pixels[j], pixels[j + 1], pixels[j + 2]);
    let least = Math.min(pixels[j], pixels[j + 1], pixels[j + 2]);
    let top2 = subtract(most, least);
    chroma_total += divide(top2, 255);
  }
  let chroma = divide(chroma_total, count);
  let factor = 1;
  if (greater_than(chroma, 0.01)) {
    let divided = divide(chroma_target, chroma);
    let b5 = Math.pow(divided, strength);
    let b6 = math_max(1, b5);
    factor = math_min(factor_most, b6);
  }
  if (greater_than(factor, 1)) {
    for (let i = 0; less_than(i, count); i++) {
      let j = multiply(i, 4);
      let y =
        multiply(pixels[j], 0.2126) +
        multiply(pixels[j + 1], 0.7152) +
        multiply(pixels[j + 2], 0.0722);
      let left4 = subtract(pixels[j], y);
      pixels[j] = clamp(y + multiply(left4, factor));
      let left5 = subtract(pixels[j + 1], y);
      pixels[j + 1] = clamp(y + multiply(left5, factor));
      let left6 = subtract(pixels[j + 2], y);
      pixels[j + 2] = clamp(y + multiply(left6, factor));
    }
  }
  let r = {
    luma_low: luma.low,
    luma_high: luma.high,
    chroma,
    factor,
  };
  return r;
}
