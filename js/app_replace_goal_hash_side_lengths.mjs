import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_goal_hash_side_lengths(side, other) {
  "How many letters of each symbol of one side of a goal a link starts out showing, given the other side: one letter each, except inside a long run of symbols both sides begin with or both end with, where only the first two and the last are shown and the rest start hidden - nought letters - so the loop header both sides of a for goal repeat shortens to f(_).";
  "A run is long from five symbols up; below that hiding saves a letter or two and costs what the reader sees. The first two are kept rather than one because a run in the code lessons nearly always opens with a word and a bracket, and f(_) reads as a call where f_) reads as nothing; f(...) and f...) were the other spellings asked about, turned down because a full stop already stands for a semicolon here.";
  "A hidden symbol is only where the link starts: when two goals of a set would come out alike it is shown again, one letter at a time, like any other symbol that tells them apart.";
  function lambda() {
    let r = 1;
    return r;
  }
  let lengths = list_map(side, lambda);
  let prefix = 0;
  while (
    less_than(prefix, side.length) &&
    less_than(prefix, other.length) &&
    equal(side[prefix], other[prefix])
  ) {
    prefix += 1;
  }
  let suffix = 0;
  while (
    less_than(suffix, subtract(side.length, prefix)) &&
    less_than(suffix, subtract(other.length, prefix)) &&
    equal(
      side[subtract(subtract(side.length, 1), suffix)],
      other[subtract(subtract(other.length, 1), suffix)],
    )
  ) {
    suffix += 1;
  }
  function hide(from, count) {
    if (less_than(count, 5)) {
      return;
    }
    for (
      let place = from + 2;
      less_than(place, subtract(from + count, 1));
      place++
    ) {
      lengths[place] = 0;
    }
  }
  hide(0, prefix);
  let difference = subtract(side.length, suffix);
  hide(difference, suffix);
  return lengths;
}
