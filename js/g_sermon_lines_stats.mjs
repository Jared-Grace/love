import { g_sermon_write } from "./g_sermon_write.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { list_add } from "./list_add.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_sorted_percentile } from "./list_sorted_percentile.mjs";
("Go through every written sermon across BOTH stores — the write store (1JN/1PE/HEB, `lines` arrays) and the edited bible store (ROM/JAS, `sermon` strings) — one sermon = one passage; report min, max, and median line count.");
export async function g_sermon_lines_stats() {
  let joined = local_function_path(g_sermon_write, "");
  let joined2 = local_function_path(app_g_bible, "");
  let dirs = [joined, joined2];
  let counts = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      let passages = property_get_or(chapter, "passages", []);
      for (let passage of passages) {
        let item = g_sermon_passage_line_count(passage);
        list_add(counts, item);
      }
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
