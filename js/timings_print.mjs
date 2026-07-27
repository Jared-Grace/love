import { log } from "./log.mjs";
import { timings_ranked } from "./timings_ranked.mjs";
export function timings_print(timings) {
  "Says how long each thing took, slowest first.";
  "The ordering lives in the ranking function rather than here, because a caller that wants the same order in what it RETURNS was left re-deriving it from the printed lines - and an order derived twice is one that can come out two ways.";
  let sorted = timings_ranked(timings);
  log(timings_print.name, sorted);
}
