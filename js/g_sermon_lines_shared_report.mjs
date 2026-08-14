import { g_sermon_lines_shared } from "./g_sermon_lines_shared.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_sorted_percentile } from "./list_sorted_percentile.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function g_sermon_lines_shared_report() {
  "What the word sharing actually measures out at across every sermon line already written - the spread of it, and the lines at either end.";
  "The point of it is one number nobody has yet: how much of the passage's own words a line the human has ALREADY APPROVED is made of. Until that is read, a sharing count can say a line is high or low against nothing at all, and a threshold set from a guess would only measure the guess.";
  "Two spreads are given rather than one. The plain share counts the passage's own words; the second adds the words doing the same job as one of the passage's, so the gap between the two spreads says how much the job-matching is carrying. Where they barely differ, the job lists are earning little.";
  "The lines at either end are named, not just counted, because a spread says the shape and never says whether the low end is a line that is genuinely hard or a line the measure is reading wrongly. That is a judgment, and it needs the words.";
  let readings = await g_sermon_lines_shared();
  function has_words(reading) {
    let some = greater_than(reading.of, 0);
    return some;
  }
  let counted = list_filter(readings, has_words);
  function share_of(reading) {
    let share = divide(reading.shared_count, reading.of);
    return share;
  }
  function serving_share_of(reading) {
    let both = add(reading.shared_count, reading.serving_count);
    let share = divide(both, reading.of);
    return share;
  }
  function spread_of(mapper) {
    let values = list_map(counted, mapper);
    let sorted = list_sort_number_mapper(values, function value_itself(v) {
      return v;
    });
    function at(fraction) {
      let value = list_sorted_percentile(sorted, fraction);
      let rounded = number_round_places(value, 2);
      return rounded;
    }
    let spread = {
      least: at(0),
      quarter: at(0.25),
      middle: at(0.5),
      three_quarters: at(0.75),
      most: at(1),
    };
    return spread;
  }
  let by_share = list_sort_number_mapper(counted, share_of);
  function named(reading) {
    let name = {
      chapter_code: reading.chapter_code,
      verses: reading.verse_numbers,
      share: number_round_places(share_of(reading), 2),
      of: reading.of,
      line: reading.line,
      added: reading.added,
    };
    return name;
  }
  let lowest = list_map(list_slice_count(by_share, 0, 8), named);
  let by_share_down = list_sort_number_mapper_reverse(counted, share_of);
  let highest = list_map(list_slice_count(by_share_down, 0, 5), named);
  function serving_held(reading) {
    let some = greater_than(reading.serving_count, 0);
    return some;
  }
  let serving_lines = list_filter(counted, serving_held);
  let report = {
    lines: counted.length,
    serving_lines: serving_lines.length,
    shared: spread_of(share_of),
    shared_and_serving: spread_of(serving_share_of),
    lowest,
    highest,
  };
  return report;
}
