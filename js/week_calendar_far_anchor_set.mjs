import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function week_calendar_far_anchor_set(span, slot, anchor) {
  arguments_assert(arguments, 3);
  ("backing up a step: drop the whole range and re-plant the anchor on its far end — the endpoint furthest from the clicked piece — so the next click re-draws the range from there; a lone one-piece range just clears");
  let single = equal(span.start, span.end);
  if (not(single)) {
    let distance_start = subtract(slot, span.start);
    let distance_end = subtract(span.end, slot);
    let far_first = greater_than_equal(distance_start, distance_end);
    let keep = far_first ? span.start : span.end;
    anchor = {
      day: span.day,
      slot: keep,
    };
  }
  let r = {
    anchor,
  };
  return r;
}
