import { subtract } from "./subtract.mjs";
export function text_separators_longest_first(separators) {
  "The same separators ordered longest first, so a search that tries them in turn never mistakes a longer one for the shorter one it begins with.";
  "A copy is ordered rather than the list handed in, because the caller's list is usually written down somewhere as a constant and reordering it under them would change what every other reader of it sees.";
  let ordered = separators.slice();
  function by_length_reverse(one, other) {
    let difference = subtract(other.length, one.length);
    return difference;
  }
  ordered.sort(by_length_reverse);
  return ordered;
}
