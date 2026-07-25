import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map } from "./list_map.mjs";
export async function g_sermon_chapter_passages_for_grouping(chapter) {
  "one chapter's passages prepared for grouping: each as {ref, lines} in reading order — ref is the comma-joined verse numbers, lines the sermon's authoritative line count";
  let passages = await g_sermon_chapter_passages(chapter);
  function to_ref_lines(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let ref = list_join_comma(verse_numbers);
    let lines = g_sermon_passage_line_count(passage);
    let r = {
      ref,
      lines,
    };
    return r;
  }
  let out = list_map(passages, to_ref_lines);
  return out;
}
