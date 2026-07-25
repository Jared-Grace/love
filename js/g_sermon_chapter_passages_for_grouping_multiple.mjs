import { text_split_comma } from "./text_split_comma.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { g_sermon_chapter_passages_for_grouping } from "./g_sermon_chapter_passages_for_grouping.mjs";
export async function g_sermon_chapter_passages_for_grouping_multiple(
  chapters_comma,
) {
  "Prepare many chapters for grouping in one call, because grouping is decided by comparing a whole book's chapters against each other and asking one chapter at a time forces a shell loop that hides the comparison. Each chapter keeps its own entry so a passage's ref and line count is still read under the chapter it came from.";
  let chapters = text_split_comma(chapters_comma);
  async function chapter_entry(chapter) {
    let passages = await g_sermon_chapter_passages_for_grouping(chapter);
    let r = {
      chapter,
      passages,
    };
    return r;
  }
  let out = await list_map_async(chapters, chapter_entry);
  return out;
}
