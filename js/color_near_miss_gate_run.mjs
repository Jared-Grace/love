import { color_near_miss_baseline_read } from "./color_near_miss_baseline_read.mjs";
import { color_near_miss_baseline_write } from "./color_near_miss_baseline_write.mjs";
import { colors_near_miss_pairs } from "./colors_near_miss_pairs.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_difference } from "./list_difference.mjs";
export async function color_near_miss_gate_run() {
  "QA gate for the colour rule: two colours are either the same colour or clearly different ones, never almost the same. A near miss is a decision that got made twice — one designer picked a gold, another picked a gold a shade off, and now a change to either leaves the two screens disagreeing. Measured against the baseline file rather than against zero, so the rule binds new code today; a pair the baseline does not list fails, and a pair it lists that no longer happens fails too, so the list can only shrink.";
  let pairs = await colors_near_miss_pairs();
  let known = await color_near_miss_baseline_read();
  let added = list_difference(pairs, known);
  let stale = list_difference(known, pairs);
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    let message_added =
      "colour gate: " +
      added.length +
      " new pairs of colours read as one colour — reuse the existing one instead of adding a shade beside it: " +
      added.join(", ");
    throw new Error(message_added);
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    let message_stale =
      "colour gate: " +
      stale.length +
      " baseline pairs are no longer near misses — rerun " +
      color_near_miss_baseline_write.name +
      " to shrink the baseline: " +
      stale.join(", ");
    throw new Error(message_stale);
  }
  let result = {
    added: 0,
    stale: 0,
  };
  return result;
}
