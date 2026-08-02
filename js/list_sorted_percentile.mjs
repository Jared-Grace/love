import { floor } from "./floor.mjs";
import { ceil } from "./ceil.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function list_sorted_percentile(sorted, fraction) {
  "the value at a fractional rank in an ascending-sorted numeric list, by linear interpolation; fraction 0.5 gives the median, 0.9 the top-tenth threshold";
  let n = sorted.length;
  let right = subtract(n, 1);
  let rank = multiply(fraction, right);
  let lo = floor(rank);
  let hi = ceil(rank);
  let frac = subtract(rank, lo);
  let low = sorted[lo];
  let high = sorted[hi];
  let left = subtract(high, low);
  let value = low + multiply(left, frac);
  return value;
}
