import { g_sermon_stores_chapters } from "./g_sermon_stores_chapters.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapters_passage_lines() {
  "read every written sermon chapter across both stores; return a list where each item is one chapter's ordered passage line counts";
  "Where those stores are, and the walk through their files, is asked of the one reading that answers it rather than written out here a third time.";
  let chapters = await g_sermon_stores_chapters();
  let counts = [];
  for (let chapter of chapters) {
    let passages = property_get_or(chapter, "passages", []);
    let lines = list_map(passages, g_sermon_passage_line_count);
    list_add(counts, lines);
  }
  return counts;
}
