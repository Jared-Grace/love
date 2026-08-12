import { ebible_index_flats_union_cases } from "./ebible_index_flats_union_cases.mjs";
import { ebible_index_flats_union } from "./ebible_index_flats_union.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_index_flats_union_cases_gate_run() {
  "QA gate: joining the verse lists of several bibles gives the walk the corpus says it should.";
  "The record next door checks that each bible has an index to join; this checks what joining them means. A bible could gain its index and still be walked wrongly, and nothing about the walk being wrong would say so - a reader is simply taken somewhere else.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = ebible_index_flats_union_cases();
  function answer(c) {
    let chapter_codes = property_get(c, "chapter_codes");
    let lists = property_get(c, "lists");
    let union = ebible_index_flats_union(chapter_codes, lists);
    return union;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "union",
    "why",
    "ebible index flats union",
  );
  return r;
}
