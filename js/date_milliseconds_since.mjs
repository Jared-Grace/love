import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
export function date_milliseconds_since(started) {
  "How long ago something started, in milliseconds.";
  let now = date_now_milliseconds();
  let elapsed = subtract(now, started);
  return elapsed;
}
