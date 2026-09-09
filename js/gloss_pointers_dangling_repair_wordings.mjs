import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_pointers_dangling_repair } from "./gloss_chapter_pointers_dangling_repair.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_pointers_dangling_repair_wordings(
  fn,
  lambda$pointer_is,
  wordings,
) {
  "Give a real explanation, out of a table handed in, to every word in one whole gloss store whose first explanation in a chapter only points the reader back at a word met earlier when nothing earlier in that chapter said anything about it - answering with the chapters it repaired and how many words moved in each.";
  "The table is handed in rather than gathered here, because there are two places one can come from and they are not the same kind of thing. One is the store's own settled wordings, which repairs a word the store already explains somewhere and needs nobody to write anything. The other is a wording somebody sat down and wrote, for a word the store has never explained anywhere at all - and that is the only thing left after the first pass has run.";
  "A word the table says nothing about is left exactly as it stands, so a partly written table can be applied without harming what it says nothing about.";
  "The chapters it left alone are counted rather than listed, because a store runs to hundreds of them and a reader checking the work wants the ones that moved.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_repair(chapter_code) {
    let changed = await gloss_chapter_pointers_dangling_repair(
      chapter_code,
      fn,
      lambda$pointer_is,
      wordings,
    );
    let words = list_size(changed);
    let r = {
      chapter_code,
      words,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_repair);
  function moved_is(chapter) {
    let words = property_get(chapter, "words");
    let moved = greater_than(words, 0);
    return moved;
  }
  function words_read(chapter) {
    let words = property_get(chapter, "words");
    return words;
  }
  let rewritten = list_filter(chapters, moved_is);
  let repaired = list_map_sum(rewritten, words_read);
  let r2 = {
    chapters: list_size(chapter_codes),
    rewritten,
    repaired,
  };
  return r2;
}
