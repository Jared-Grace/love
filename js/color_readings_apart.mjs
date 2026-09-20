import { arguments_assert } from "./arguments_assert.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { color_apart } from "./color_apart.mjs";
import { number_text_floored } from "./number_text_floored.mjs";
export function color_readings_apart(colors, places) {
  arguments_assert(arguments, 2);
  ("how far apart every pair in a palette looks, to ordinary sight and to each of the three ways a cone can be missing, each written as one sentence carrying its own figure");
  ("Ordinary sight is asked first so it heads the record, and then the three ways a cone can be missing. Missing the blue cone is vanishingly rare and is asked anyway - leaving it out would be a judgment about which readers count, made here, by arithmetic that costs nothing to run. That judgment is how the worst reading in the chip palette came to be missed on a first pass.");
  ("Each pair is asked once and not twice. How far apart two colours look is the same question whichever of them is named first, so walking every ordered pair would write the whole matrix out again backwards - and a record holding each reading twice quietly halves what a change has to break before the count looks wrong.");
  ("EACH COLOUR IS NAMED BY ITS SPELLING AND NOT BY WHERE IT SITS IN THE LIST. Calling one of them the red would fix the order of a list whose order was never meant to be a name, and would go stale the moment somebody revised the red into something else while the sentence went on calling it red. Spelled out, the sentence changes when the colour changes, which is the whole behaviour wanted.");
  ("THE SET IS TAKEN RATHER THAN WRITTEN DOWN, so a colour added to a palette is measured against every existing member the day it arrives, with nothing for anybody to remember to update.");
  let cones = [
    ["none", "with ordinary sight"],
    ["red", "to a reader with no red cone"],
    ["green", "to a reader with no green cone"],
    ["blue", "to a reader with no blue cone"],
  ];
  let readings = [];
  let indexes = list_indexes(colors);
  for (let index of indexes) {
    for (let index_other of indexes) {
      let later = less_than(index, index_other);
      if (later) {
        let color = list_get(colors, index);
        let color_other = list_get(colors, index_other);
        for (let cone of cones) {
          let named = list_get(cone, 0);
          let said = list_get(cone, 1);
          let measured = color_apart(color, color_other, named);
          let figure = number_text_floored(measured, places);
          let subject = color + " and " + color_other + ", " + said;
          readings.push(subject + ": " + figure);
        }
      }
    }
  }
  return readings;
}
