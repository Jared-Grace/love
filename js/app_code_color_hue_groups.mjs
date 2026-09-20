import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_colors_placed_by_hue } from "./app_code_colors_placed_by_hue.mjs";
import { color_places_cut_at_gap } from "./color_places_cut_at_gap.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_color_hue_groups() {
  arguments_assert(arguments, 0);
  ("the colours of this app's three palettes, gathered into the hues they have - one group per hue, in order round the wheel, each carrying the dark colours written at that hue and the light ones");
  ("THE GAP IS NOT TUNED AND THE MEASUREMENT IS WHY. Measured 2026-09-20 over the ten colours: the biggest step inside what anybody would call one hue is 7.2 degrees, between the pointing red and the light red; the smallest step between two hues is 31.5, between the red and the amber. So every setting from eight to thirty-one gives the same four groups, and twelve was taken from the middle of that. A threshold chosen where the answer is flat is a threshold that is not doing the deciding - if this number ever has to be nudged to get the answer somebody wanted, the palette has grown two hues too close to tell apart and that is the finding, not the number.");
  ("THE TWELVE SURVIVES THE ELEVEN COLOURS THIS DOES NOT SEE, WHICH IS WORTH KNOWING BEFORE ANYBODY WIDENS IT. Measured 2026-09-20 over all twenty-one the app draws: the widest step inside a run becomes 8.2 degrees and the narrowest step between runs becomes 28.1, so the flat window narrows from eight-to-thirty-one to nine-to-twenty-eight and twelve is still well inside it. What changes is the answer, not the threshold - five runs rather than four, because the grey and the three translucent whites land together at a nominal 89.9 that is not a hue at all, and because the blue run grows to eight colours with nothing in it for the rule to cut on.");
  ("THE NUMBER LIVES HERE AND THE CUTTING DOES NOT, because the argument above is about these ten colours and nothing else. What counts as one hue is a judgment about a particular palette, so it is made where the palette is known and handed to a function that only does what it is told.");
  ("NOTHING IS JUDGED HERE. This says what the hues are and which tones sit at each; whether any of that is a fault is the next name along, and whether a fault is allowed to stand is the baseline after that. Three steps rather than one, because the grouping is the part that is simply true and it should be askable without also being told off.");
  let placed = app_code_colors_placed_by_hue();
  let gap = 12;
  let runs = color_places_cut_at_gap(placed, gap);
  let groups = [];
  for (let run of runs) {
    let group = {
      dark: [],
      light: [],
    };
    for (let place of run) {
      let tone = property_get(place, "tone");
      let written = property_get(place, "written");
      group[tone].push(written);
    }
    groups.push(group);
  }
  return groups;
}
