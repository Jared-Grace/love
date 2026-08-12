import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { g_plant_days_report } from "./g_plant_days_report.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function g_plant_days_seeds_report(count) {
  "Schedules a settled plant on this many seeds and counts how the lengths came out, so a claim about how long a plant is can be checked rather than remembered.";
  "One seed says nothing about a range. A plant ends when its arcs run out, and arc turns are DRAWN, so a run of short ones ends a plant early - which is exactly the case a single run is least likely to show and a written floor is most likely to be wrong about.";
  "The seeds are the counting words rather than a list somebody typed, so the sample size is ONE number and widening it is a bigger number rather than more words. A typed list also goes stale silently: nothing tells you a word stopped being in it.";
  ("What it reports against is the range written in ",
    fn_name("g_generation_settings"),
    ", because the point is whether the chosen numbers and the scheduler agree - not what the scheduler does on its own.");
  let s = g_generation_settings();
  let lengths = [];
  let short_at = [];
  let long_at = [];
  let leader_turns = [];
  for (let index = 1; less_than_equal(index, count); index++) {
    let seed = number_to_words(index);
    let report = g_plant_days_report(seed);
    let days = property_get(report, "days");
    list_add(lengths, days);
    let under = less_than(days, s.plant_days_minimum);
    if (under) {
      list_add(short_at, seed);
    }
    let over = greater_than(days, s.plant_days_maximum);
    if (over) {
      list_add(long_at, seed);
    }
    let turns = property_get(report, "leader_turns");
    list_add(leader_turns, turns);
  }
  let total = list_sum(lengths);
  let mean = divide(total, count);
  let r = {
    wanted: s.plant_days,
    range: [s.plant_days_minimum, s.plant_days_maximum],
    mean,
    least: list_min(lengths),
    most: list_max(lengths),
    short_at,
    long_at,
    leader_least: list_min(leader_turns),
    leader_wanted: s.leader_turns_minimum,
    lengths,
  };
  return r;
}
