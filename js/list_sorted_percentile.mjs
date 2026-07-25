export function list_sorted_percentile(sorted, fraction) {
  "the value at a fractional rank in an ascending-sorted numeric list, by linear interpolation; fraction 0.5 gives the median, 0.9 the top-tenth threshold";
  let n = sorted.length;
  let rank = fraction * (n - 1);
  let lo = Math.floor(rank);
  let hi = Math.ceil(rank);
  let frac = rank - lo;
  let low = sorted[lo];
  let high = sorted[hi];
  let value = low + (high - low) * frac;
  return value;
}
