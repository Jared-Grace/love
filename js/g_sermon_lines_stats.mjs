import { g_sermon_chapters_passage_lines } from "./g_sermon_chapters_passage_lines.mjs";
import { list_add } from "./list_add.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_sorted_percentile } from "./list_sorted_percentile.mjs";
("Go through every written sermon across BOTH stores — the write store (1JN/1PE/HEB, `lines` arrays) and the edited bible store (ROM/JAS, `sermon` strings) — one sermon = one passage; report min, max, and median line count.");
export async function g_sermon_lines_stats() {
  let chapters = await g_sermon_chapters_passage_lines();
  let counts = [];
  for (let lines of chapters) {
    for (let item of lines) {
      list_add(counts, item);
    }
  }
  list_sort_number(counts);
  let n = counts.length;
  let median = list_sorted_percentile(counts, 0.5);
  let top_tenth = list_sorted_percentile(counts, 0.9);
  let r = {
    sermon_count: n,
    min: list_min(counts),
    max: list_max(counts),
    median,
    top_tenth,
  };
  return r;
}
