import { list_map_sum } from "./list_map_sum.mjs";
import { g_sermon_chapter_passages_for_grouping } from "./g_sermon_chapter_passages_for_grouping.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_chapter_lines(chapter) {
  "how many sermon lines one chapter holds in total, summed over its passages";
  "This is the chapter's SIZE for every budget that follows, because matches are scaled by lines rather than by passages - a two-line passage and a six-line one are not the same amount of chapter.";
  let passages = await g_sermon_chapter_passages_for_grouping(chapter);
  function passage_lines(passage) {
    let lines = property_get(passage, "lines");
    return lines;
  }
  let r = list_map_sum(passages, passage_lines);
  return r;
}
