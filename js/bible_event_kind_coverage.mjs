import { bible_gathered_readings_all } from "./bible_gathered_readings_all.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_event_kind_coverage() {
  "How much of the read corpus each kind of event accounts for, commonest kind first, and how many events are covered once that kind and every commoner one are taken together.";
  "★ THIS IS THE MEASUREMENT THAT ANSWERS HOW MANY MECHANICS THE GAME NEEDS. Build a mechanic per kind and this says what each one buys: the count is how many events it can be used in, and the running total is how much of the book is playable once the first so many are built. Without it the number of mechanics is a guess, and a guess made before reading is the mechanic deciding what Scripture may be.";
  "★ THE RUNNING TOTAL IS NOT THE COUNTS ADDED UP, and the difference is the whole point of computing it. Most events carry several kinds, so an event already reachable through one kind is not reached twice by the next. Adding the counts would say the top few kinds cover more of the book than they do, and would say it in the optimistic direction - the direction that stops you building the mechanic you actually still need.";
  "The ranking decides the order the running total is accumulated in, so the total answers the question BUILD THE COMMONEST FIRST. Any other build order gives different running totals over the same data, which is a fact about the strategy rather than about the corpus.";
  let readings = await bible_gathered_readings_all();
  function kinds_of(reading) {
    let kinds = property_get(reading, "kinds");
    return kinds;
  }
  let kinds_lists = list_map(readings, kinds_of);
  let kinds_all = list_concat_multiple(kinds_lists);
  let ranked = list_tally_ranked(kinds_all);
  let chosen = [];
  let rows = [];
  function each_ranked(row) {
    let kind = property_get(row, "value");
    let count = property_get(row, "count");
    list_add(chosen, kind);
    function reading_covered_is(reading) {
      let kinds = kinds_of(reading);
      function chosen_is(kind_one) {
        let is = list_includes(chosen, kind_one);
        return is;
      }
      let hits = list_filter_size(kinds, chosen_is);
      let none = equal(hits, 0);
      let covered = not(none);
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
