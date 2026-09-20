import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { color_parsed_assert } from "./color_parsed_assert.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { color_near_miss_threshold } from "./color_near_miss_threshold.mjs";
export function colors_near_miss_is(parsed, parsed_other) {
  "whether two already read colours are a near miss: close enough that nobody can tell them apart, yet not the same value. Equal colours are excluded on purpose — the same value written twice is a plain duplicate, which is a different finding and is caught elsewhere. Different opacities are excluded too, because the alpha is usually the job the colour is doing: a faint shadow and a solid backdrop are two decisions, not one.";
  "BOTH COLOURS ARE CHECKED TO BE READ COLOURS BEFORE ANYTHING IS MEASURED, because the way this gets called wrongly does not fail. Handed the written spellings instead - which is what a colour is carried around as everywhere else - every channel asked for below is nothing, every distance comes out not a number, the first comparison answers false, and the verdict is no near miss. That is the same word this says when two colours genuinely are far apart, so a sweep can lose every pair it was built to find and report a clean run. It happened: a probe answered none across a whole app twice, and parsing first turned none into two.";
  color_parsed_assert(
    parsed,
    text_combine_multiple([fn_name("colors_near_miss_is"), ", first colour"]),
  );
  color_parsed_assert(
    parsed_other,
    text_combine_multiple([fn_name("colors_near_miss_is"), ", second colour"]),
  );
  let alpha_apart = numbers_apart(parsed.alpha, parsed_other.alpha);
  let same_opacity = less_than_equal(alpha_apart, 0.02);
  if (not(same_opacity)) {
    return false;
  }
  let red_apart = numbers_apart(parsed.red, parsed_other.red);
  let green_apart = numbers_apart(parsed.green, parsed_other.green);
  let blue_apart = numbers_apart(parsed.blue, parsed_other.blue);
  let apart = Math.max(red_apart, green_apart, blue_apart);
  let identical = equal(apart, 0);
  if (identical) {
    return false;
  }
  let threshold = color_near_miss_threshold();
  let near = less_than_equal(apart, threshold);
  return near;
}
