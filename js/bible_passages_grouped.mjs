import { bible_passages_grouped_adder } from "./bible_passages_grouped_adder.mjs";
import { ebible_folders_chapters_codes_to_verses } from "./ebible_folders_chapters_codes_to_verses.mjs";
import { bible_interlinear_chapters_cache } from "./bible_interlinear_chapters_cache.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function bible_passages_grouped(bible_folders, chapters_codes) {
  "Divide the named chapters into passages, and hand back each one as its original-language wording, its wording in every bible asked for, the verse numbers it covers, and the chapter it belongs to.";
  "Dividing the text is separate from doing anything with a passage, so everything that authors for one - a sermon, a word-by-word gloss - cuts the chapter in exactly the same places, and a reader who has both in front of them sees them line up.";
  let verses_book_folders = await ebible_folders_chapters_codes_to_verses(
    chapters_codes,
    bible_folders,
  );
  let chapters_interlinear = await bible_interlinear_chapters_cache();
  async function adder(la) {
    let r = await bible_passages_grouped_adder(
      la,
      bible_folders,
      chapters_interlinear,
      verses_book_folders,
    );
    return r;
  }
  let groups = await list_adder_async(adder);
  return groups;
}
