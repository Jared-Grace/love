import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_color_tones } from "./app_code_color_tones.mjs";
import { property_get } from "./property_get.mjs";
import { color_hue_or_null } from "./color_hue_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_colors_placed_by_hue() {
  arguments_assert(arguments, 0);
  ("the colours of this app's three palettes, put on the colour wheel and stood in order round it - each one carrying the way it is written, whether it is a dark colour or a light one, and its hue in degrees");
  "IT IS THE THREE PALETTES AND NOT THE APP, and the line above said otherwise until 2026-09-20. Whatever " +
    fn_name("app_code_color_tones") +
    " hands over is what stands on the wheel, and that is ten colours out of the twenty-one the app draws. The eleven it leaves out are written down there, with a reading for each.";
  ("THE DARK ONES AND THE LIGHT ONES ARRIVE AS TWO LISTS AND LEAVE AS ONE, which is the whole reason this exists. A hue is a property of the colour and not of the list it was filed under, so the two have to be stood side by side before anything can ask whether a hue is carrying both tones.");
  ("A COLOUR IT CANNOT READ STOPS THIS OUT LOUD RATHER THAN BEING LEFT OUT. A palette entry nothing can read is a mistake in the palette, and a hue quietly missing a colour would be read downstream as a hue short of a tone - the wrong fault, pointing at the wrong place.");
  ("NOTHING IS JUDGED HERE, and the order is the only opinion: it is what lets the next step cut the wheel into hues by looking at neighbours alone.");
  let tones = app_code_color_tones();
  let dark = property_get(tones, "dark");
  let light = property_get(tones, "light");
  let placed = [];
  function place_add(written, tone) {
    "one colour, put on the wheel, or refused out loud if it cannot be read.";
    let hue = color_hue_or_null(written);
    let unreadable = null_is(hue);
    if (unreadable) {
      throw new Error(
        "app code colours placed: cannot read " + written + " as a colour",
      );
    }
    let item = {
      written,
      tone,
      hue,
    };
    placed.push(item);
  }
  for (let written of dark) {
    place_add(written, "dark");
  }
  for (let written of light) {
    place_add(written, "light");
  }
  function by_hue(one, other) {
    "in order round the wheel, starting at red.";
    let left = property_get(one, "hue");
    let right = property_get(other, "hue");
    let difference = subtract(left, right);
    return difference;
  }
  placed.sort(by_hue);
  return placed;
}
