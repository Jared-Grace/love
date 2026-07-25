import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
("Go through every written sermon (one sermon = one passage) and report the min, max, and median line count across all of them.");
export async function g_sermon_lines_stats() {
  let dir = local_function_path(g_sermon_write, "");
  let files = await folder_read_files(dir);
  let counts = [];
  for (let file of files) {
    let file_path = path_join([dir, file]);
    let chapter = await file_read_json(file_path);
    let passages = property_get(chapter, "passages");
    for (let passage of passages) {
      let lines = property_get(passage, "lines");
      list_add(counts, lines.length);
    }
  }
  list_sort_number(counts);
  let n = counts.length;
  let divided = divide(n, 2);
  let mid = Math.floor(divided);
  let left = modulo(n, 2);
  let even = equal(left, 0);
  let median = even
    ? divide(counts[subtract(mid, 1)] + counts[mid], 2)
    : counts[mid];
  let r = {
    sermon_count: n,
    chapter_count: files.length,
    min: list_min(counts),
    max: list_max(counts),
    median,
  };
  return r;
}
