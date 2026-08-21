import { bible_event_readings_kinds_ranked } from "./bible_event_readings_kinds_ranked.mjs";
import { bible_event_reading_kinds } from "./bible_event_reading_kinds.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
export async function bible_event_kind_coverage() {
  "How much of the read corpus each kind of event accounts for, commonest kind first, and how many events are covered once that kind and every commoner one are taken together.";
  "★ THIS IS THE MEASUREMENT THAT ANSWERS HOW MANY MECHANICS THE GAME NEEDS. Build a mechanic per kind and this says what each one buys: the count is how many events it can be used in, and the running total is how much of the book is playable once the first so many are built. Without it the number of mechanics is a guess, and a guess made before reading is the mechanic deciding what Scripture may be.";
  "★ THE RUNNING TOTAL IS NOT THE COUNTS ADDED UP, and the difference is the whole point of computing it. Most events carry several kinds, so an event already reachable through one kind is not reached twice by the next. Adding the counts would say the top few kinds cover more of the book than they do, and would say it in the optimistic direction - the direction that stops you building the mechanic you actually still need.";
  "The ranking decides the order the running total is accumulated in, so the total answers the question BUILD THE COMMONEST FIRST. Any other build order gives different running totals over the same data, which is a fact about the strategy rather than about the corpus.";
  let counted = await bible_event_readings_kinds_ranked();
  let readings = counted.readings;
  let ranked = counted.ranked;
  let chosen = [];
  let rows = [];
  function each_ranked(row) {
    let kind = property_get(row, "value");
    let count = property_get(row, "count");
    list_add(chosen, kind);
    function reading_covered_is(reading) {
      let kinds = bible_event_reading_kinds(reading);
      function chosen_is(kind_one) {
        let is = list_includes(chosen, kind_one);
        return is;
      }
      let hits = list_filter_size(kinds, chosen_is);
      let covered = equal_not(hits, 0);
      return covered;
    }
    let events_covered = list_filter_size(readings, reading_covered_is);
    list_add(rows, {
      kind,
      count,
      events_covered,
    });
  }
  each(ranked, each_ranked);
  let events = list_size(readings);
  let kinds_used = list_size(ranked);
  let r = {
    events,
    kinds_used,
    rows,
  };
  return r;
}
