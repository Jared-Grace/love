import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_last } from "./list_last.mjs";
import { greater_than } from "./greater_than.mjs";
export function color_places_cut_at_gap(placed, gap) {
  arguments_assert(arguments, 2);
  ("colours already standing in order of hue, cut into runs wherever the step from one to the next is wider than the gap given - one list per run, still in order, and the wheel's seam joined up. Each colour is whatever the caller handed over, so long as it carries a hue in degrees.");
  ("A HUE IS NOT A NAME HERE, IT IS A GAP. Nothing decides that a colour is red or amber, because that decision would have to be made somewhere and a boundary drawn through the wheel would put two colours either side of it into different runs while they look like one colour. The runs are read off the colours rather than imposed on them, so a palette with five hues makes five runs the day it is written without anybody naming the fifth.");
  ("THE WHEEL JOINS UP AT THE TOP AND THAT IS HANDLED RATHER THAN MENTIONED. A red just under three hundred and sixty and a red just over nought are one hue, and standing them in order of hue puts them at opposite ends of the line. A palette can easily have nothing near that seam, which is exactly the condition under which a hole like this gets left in and then found by somebody who picked a slightly different red a year later.");
  ("THE GAP IS THE CALLER'S AND SO IS THE ARGUMENT FOR IT. What counts as one hue is a judgment about a particular set of colours, so it is not decided here. What is decided here is only that the judgment is a single number and that the answer is read off the colours once it is given.");
  ("NOTHING IS JUDGED. This says where the runs fall; whether a run is short of something or holding too much belongs to whoever asked.");
  let nothing = list_empty_is(placed);
  if (nothing) {
    let r = [];
    return r;
  }
  let runs = [];
  let previous_hue = null;
  for (let place of placed) {
    let hue = property_get(place, "hue");
    let first = null_is(previous_hue);
    let near = not(first) && less_than_equal(subtract(hue, previous_hue), gap);
    if (not(near)) {
      runs.push([]);
    }
    let run = list_last(runs);
    run.push(place);
    previous_hue = hue;
  }
  let several = greater_than(runs.length, 1);
  let lowest = placed[0];
  let highest = list_last(placed);
  let right = property_get(highest, "hue");
  let over_the_top = subtract(360, right);
  let around = less_than_equal(over_the_top + property_get(lowest, "hue"), gap);
  let wrapped = several && around;
  if (wrapped) {
    let last = runs.pop();
    let first_run = runs[0];
    runs[0] = last.concat(first_run);
  }
  return runs;
}
