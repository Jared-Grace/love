import { random_range } from "./random_range.mjs";
export function html_loading_spinner_scale_random(expanded) {
  "the outer ring's size for this half-breath: expanded draws a random large radius, otherwise a random small one. every draw is fresh, so no two expansions and no two collapses are the same size";
  if (expanded) {
    let large = random_range(1.06, 1.34);
    return large;
  }
  let small = random_range(0.78, 0.98);
  return small;
}
