import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_color_tones } from "./app_code_color_tones.mjs";
import { property_get } from "./property_get.mjs";
import { color_hue_or_null } from "./color_hue_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_color_hue_groups() {
  arguments_assert(arguments, 0);
  ("every colour this app draws, gathered into the hues it actually has - one group per hue, in order round the wheel, each carrying the dark colours written at that hue and the light ones");
  ("A HUE IS NOT A NAME HERE, IT IS A GAP. Nothing decides that a colour is red or amber, because that decision would have to be made somewhere and a boundary drawn through the wheel would put two colours either side of it into different groups while they look like one colour. Instead the colours are stood in order of hue and cut wherever the step from one to the next is bigger than colours of one hue ever are. So the groups are read off the palette rather than imposed on it, and a palette with five hues makes five groups the day it is written without anybody naming the fifth.");
  ("THE GAP IS NOT TUNED AND THE MEASUREMENT IS WHY. Measured 2026-09-20 over the ten colours: the biggest step inside what anybody would call one hue is 7.2 degrees, between the pointing red and the light red; the smallest step between two hues is 31.5, between the red and the amber. So every setting from eight to thirty-one gives the same four groups, and twelve was taken from the middle of that. A threshold chosen where the answer is flat is a threshold that is not doing the deciding - if this number ever has to be nudged to get the answer somebody wanted, the palette has grown two hues too close to tell apart and that is the finding, not the number.");
  ("THE WHEEL JOINS UP AT THE TOP AND THAT IS HANDLED RATHER THAN MENTIONED. A red just under three hundred and sixty and a red just over nought are one hue, and standing them in order of hue puts them at opposite ends of the line. No colour drawn today is anywhere near that seam, which is exactly the condition under which a hole like this gets left in and then found by somebody who picked a slightly different red a year later.");
  ("NOTHING IS JUDGED HERE. This says what the hues are and which tones sit at each; whether any of that is a fault is the next name along, and whether a fault is allowed to stand is the baseline after that. Three steps rather than one, because the grouping is the part that is simply true and it should be askable without also being told off.");
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
        "app code hue groups: cannot read " + written + " as a colour",
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
  let gap = 12;
  let groups = [];
  let previous_hue = null;
  for (let item of placed) {
    let hue = property_get(item, "hue");
    let first = null_is(previous_hue);
    let near = not(first) && less_than_equal(subtract(hue, previous_hue), gap);
    if (not(near)) {
      let started = {
        dark: [],
        light: [],
      };
      groups.push(started);
    }
    let group = groups[subtract(groups.length, 1)];
    let tone = property_get(item, "tone");
    let written = property_get(item, "written");
    group[tone].push(written);
    previous_hue = hue;
  }
  let several = greater_than(groups.length, 1);
  let lowest = placed[0];
  let highest = placed[subtract(placed.length, 1)];
  let right2 = property_get(highest, "hue");
  let around = less_than_equal(
    subtract(360, right2) + property_get(lowest, "hue"),
    gap,
  );
  let wrapped = several && around;
  if (wrapped) {
    let last = groups.pop();
    let first_group = groups[0];
    first_group.dark = last.dark.concat(first_group.dark);
    first_group.light = last.light.concat(first_group.light);
  }
  return groups;
}
