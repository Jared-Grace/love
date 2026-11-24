import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
export function ebible_verse_numbers_runs_text(verse_numbers) {
  "Verse numbers written the way a reference writes them: each unbroken run as its two ends, the runs joined by commas - 1, 2 and 4 come out as 1-2, 4 (human 2026-11-24: Psalm 1:1-2;4, however notated). Sorted and each counted once, so the order they arrive in does not matter.";
  arguments_assert(arguments, 1);
  function lambda(a, b) {
    let difference = subtract(a, b);
    return difference;
  }
  let sorted = list_unique(verse_numbers).map(Number).sort(lambda);
  let runs = [];
  let start = null;
  let previous = null;
  for (let n of sorted) {
    if (not_equal(previous, null) && equal(n, previous + 1)) {
      previous = n;
      continue;
    }
    if (not_equal(start, null)) {
      runs.push(
        equal(start, previous) ? String(start) : start + "-" + previous,
      );
    }
    start = n;
    previous = n;
  }
  if (not_equal(start, null)) {
    runs.push(equal(start, previous) ? String(start) : start + "-" + previous);
  }
  let text = runs.join(", ");
  return text;
}
