import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function g_progress_gain(best, current) {
  "forward PROGRESS: how much closer `current` is than `best` (the smallest distance reached so far), or 0 when it is not an improvement — best still null (first observation), equal, or farther. so wandering and backtracking never advance the clock; only net closing of the gap does. the #day_unbelievers movement clock adds this to its slice count each step and shrinks best toward the target, so the whole travel to a person costs EXACTLY its starting distance, no matter the path walked";
  if (null_is(best)) {
    return 0;
  }
  if (less_than(current, best)) {
    return subtract(best, current);
  }
  return 0;
}
