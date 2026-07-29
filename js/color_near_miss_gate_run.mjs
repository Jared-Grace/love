import { color_near_miss_baseline_path } from "./color_near_miss_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { color_near_miss_baseline_write } from "./color_near_miss_baseline_write.mjs";
import { colors_near_miss_pairs } from "./colors_near_miss_pairs.mjs";
export async function color_near_miss_gate_run() {
  "QA gate for the colour rule: two colours are either the same colour or clearly different ones, never almost the same. A near miss is a decision that got made twice — one designer picked a gold, another picked a gold a shade off, and now a change to either leaves the two screens disagreeing. Measured against the baseline file rather than against zero, so the rule binds new code today; a pair the baseline does not list fails, and a pair it lists that no longer happens fails too, so the list can only shrink.";
  let pairs = await colors_near_miss_pairs();
  let path = color_near_miss_baseline_path();
  let result = await baseline_names_gate_generic(
    pairs,
    path,
    "these pairs of colours read as one colour — reuse the existing one instead of adding a shade beside it",
    color_near_miss_baseline_write.name,
  );
  return result;
}
