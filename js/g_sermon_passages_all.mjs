import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { g_sermon_chapter_passages_for_grouping } from "./g_sermon_chapter_passages_for_grouping.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_sermon_passages_all(chapters) {
  "Every passage of the chapters handed in, flat and in THEIR order, each carrying the book and chapter it came from and how many sermon lines it holds.";
  "This is the supply as ONE run of preaching rather than as a set of chapters, which is what lets a plant be sized by what it needs instead of by where a chapter happens to end. A chapter is not a unit of anything the player experiences - it is a numbering added centuries after the letter was written - so letting it decide a plant's length was letting an editorial mark set the pacing.";
  "The passage is the smallest thing that must not be split, and it is small: three to fifteen lines. So a boundary drawn between passages can land within a few lines of anywhere, which is what makes the grouping fluid, while never cutting a written sermon in half.";
  "The chapters are RECEIVED rather than looked up, and in the order they arrive, because the player picks them when a game begins. This used to read the written set itself, which quietly assumed every game preached everything in canonical order - and that is the assumption that made plants look like something authoring could work out in advance. Order is the player's, so reading order here means the order they gave.";
  async function chapter_passages(chapter) {
    let book = ebible_chapter_code_to_book(chapter);
    let passages = await g_sermon_chapter_passages_for_grouping(chapter);
    function placed(passage) {
      let passage_record = {
        book,
        chapter,
        ref: property_get(passage, "ref"),
        lines: property_get(passage, "lines"),
      };
      return passage_record;
    }
    let out = list_map(passages, placed);
    return out;
  }
  let per_chapter = await list_map_async(chapters, chapter_passages);
  let r = list_concat_multiple(per_chapter);
  return r;
}
