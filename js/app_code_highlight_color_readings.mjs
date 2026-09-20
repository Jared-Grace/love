import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { color_contrast_floor_text } from "./color_contrast_floor_text.mjs";
import { color_contrast_floor_shape } from "./color_contrast_floor_shape.mjs";
import { color_reading_sentence } from "./color_reading_sentence.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { color_readings_apart } from "./color_readings_apart.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_highlight_color_readings() {
  arguments_assert(arguments, 0);
  ("every measurement that can be made of the pointing colours, each written out as one sentence carrying its own figure - what was measured, what it came to, and whether that clears the floor for the job or falls short of it");
  ("A RECORD OF WHAT IS, AND DELIBERATELY NOT A LIST OF FAULTS, for the same reason the chip palette keeps one: a gate reporting only faults is silent about a passing colour getting worse, and silent about a colour that was never in trouble moving. Every figure is written down, passing ones included, and the ratchet these feed refuses a sentence it has not seen AND a sentence it has seen that has stopped being produced. Nothing here decides anything.");
  ("THESE COLOURS DO DIFFERENT JOBS FROM THE CHIP COLOURS, WHICH IS THE WHOLE REASON THERE ARE TWO RECORDS AND NOT ONE. Read off the callers 2026-09-20: every one of them is a background with white lettering on it, and none of them is ever a font colour. That tile then stands on one of two grounds - the pale card, where an English word is given a code chip's dressing, or the black code line, where a piece of the code itself is picked out. So the lettering floor is asked once and the shape floor twice, once per ground.");
  ("THE CHIP PALETTE'S SECOND JOB IS ABSENT HERE AND ITS ABSENCE IS THE FINDING. A chip colour has to letter the pale card, which is what pins it under 0.1536 in luminance and squeezes the whole set into a band 0.054 tall. These never letter anything, so they are free of that ceiling - which is exactly why they sit lighter, and exactly why a proposal to give each hue a dark tone and a light tone would make this set the light half. If that day comes, these readings are what says what moved.");
  ("THE WHITE IS SPELLED HERE RATHER THAN ASKED FOR, the same copy the chip record makes and safe for the same reason: what these tiles letter in is the bare word white, the top of the scale rather than a shade anybody picked, so it cannot drift out from under a second spelling. What WOULD break it is somebody lettering a pointing tile in something other than white, at which point this goes on measuring white and says nothing.");
  ("BOTH GROUNDS ARE ASKED FOR BY NAME AND NEITHER IS SPELLED, because both of them ARE shades somebody picked and either could be revised tomorrow. That is the drift the shared spelling guards against, and it is the difference between these two and the white above.");
  let colors = app_code_highlight_colors();
  let card = app_shared_container_blue_background_color();
  let code = app_shared_color_code_background();
  let white = "white";
  let text_floor = color_contrast_floor_text();
  let shape_floor = color_contrast_floor_shape();
  ("Two places, for the same reason the chip record keeps two: a readability figure runs from one to twenty-one, where a tenth is well inside what nobody could see, and a distance between two colours runs from nought to about two, where a tenth is the difference between a palette and a muddle.");
  let contrast_places = 1;
  let apart_places = 2;
  let readings = [];
  function reading_add(subject, measured, floor_wanted) {
    "one job of one colour, added to the record.";
    let sentence = color_reading_sentence(
      subject,
      measured,
      floor_wanted,
      contrast_places,
    );
    readings.push(sentence);
  }
  for (let color of colors) {
    let ground = color_contrast_or_null(white, color);
    reading_add(
      color + " as the ground under the white lettering of a pointing tile",
      ground,
      text_floor,
    );
    let on_card = color_contrast_or_null(color, card);
    reading_add(
      color + " as a pointing tile standing on the pale card",
      on_card,
      shape_floor,
    );
    let on_code = color_contrast_or_null(color, code);
    reading_add(
      color + " as a pointing tile standing on the black code line",
      on_code,
      shape_floor,
    );
  }
  let apart = color_readings_apart(colors, apart_places);
  let all = list_concat(readings, apart);
  return all;
}
