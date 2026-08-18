import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_coverage_curve_step(r) {
  arguments_assert(arguments, 1);
  let curve = property_get(r, "curve");
  let occurrences_total = property_get(r, "occurrences_total");
  let counted = property_get(r, "counted");
  let steps = property_get(r, "steps");
  for (let step of steps) {
    let past = greater_than(step, counted.length);
    if (past) {
      continue;
    }
    let reached = 0;
    let reached_drawn = 0;
    let index = 0;
    while (less_than(index, step)) {
      let row = counted[index];
      reached = reached + row.occurrences;
      if (row.drawn) {
        reached_drawn = reached_drawn + row.occurrences;
      }
      index = index + 1;
    }
    let share = divide(reached, occurrences_total);
    let n = multiply(share, 1000);
    let tenths = round(n);
    let percent = divide(tenths, 10);
    let share_drawn = divide(reached_drawn, occurrences_total);
    let n3 = multiply(share_drawn, 1000);
    let tenths_drawn = round(n3);
    let percent_drawn = divide(tenths_drawn, 10);
    list_add(curve, {
      words: step,
      occurrences: reached,
      percent,
      percent_drawn,
    });
  }
  let r2 = {
    curve,
    occurrences_total,
    counted,
  };
  return r2;
}
