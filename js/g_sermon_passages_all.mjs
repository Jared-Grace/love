import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { g_sermon_chapter_passages_for_grouping } from "./g_sermon_chapter_passages_for_grouping.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_sermon_passages_all() {
  "Every passage of every selected chapter, flat and in reading order, each carrying the book and chapter it came from and how many sermon lines it holds.";
  "This is the supply as ONE run of preaching rather than as a set of chapters, which is what lets a plant be sized by what it needs instead of by where a chapter happens to end. A chapter is not a unit of anything the player experiences - it is a numbering added centuries after the letter was written - so letting it decide a plant's length was letting an editorial mark set the pacing.";
  "The passage is the smallest thing that must not be split, and it is small: three to fifteen lines. So a boundary drawn between passages can land within a few lines of anywhere, which is what makes the grouping fluid, while never cutting a written sermon in half.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  async function chapter_passages(chapter) {
    let book = ebible_chapter_code_to_book(chapter);
    let passages = await g_sermon_chapter_passages_for_grouping(chapter);
    function placed(passage) {
      let r = {
        book,
        chapter,
        ref: property_get(passage, "ref"),
        lines: property_get(passage, "lines"),
      };
      return r;
    }
    let out = list_map(passages, placed);
    return out;
  }
  let per_chapter = await list_map_async(chapters, chapter_passages);
  let r = list_flat(per_chapter);
  return r;
}
