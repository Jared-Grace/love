import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
export async function g_sermon_chapter_passages_for_grouping(chapter) {
  "one chapter's passages prepared for grouping, in reading (verse) order regardless of how the store held them: each as {ref, lines} — ref is the comma-joined verse numbers, lines the authoritative sermon line count";
  let passages = await g_sermon_chapter_passages(chapter);
  function passage_first_verse(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let first = verse_numbers[0];
    let n = integer_to_try(first);
    return n;
  }
  list_sort_number_mapper(passages, passage_first_verse);
  function to_ref_lines(passage) {
    let ref = g_sermon_passage_verses_key(passage);
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
