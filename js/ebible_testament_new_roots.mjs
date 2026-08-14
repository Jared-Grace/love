import { ebible_version_books_testament_new } from "./ebible_version_books_testament_new.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_chapters_each_verses_list } from "./ebible_chapters_each_verses_list.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_is } from "./text_is.mjs";
export async function ebible_testament_new_roots(bible_folder) {
  "$plain bible_folder";
  "Every root the New Testament carries in one version of the bible, in the order the chapters are read.";
  "The whole New Testament rather than the chapters written on so far, because the rooting has to be right for the verse that will be reached next as much as for the one behind. A word list built only from what has already been written is always one chapter out of date, and always in the direction of the work not yet done.";
  "A verse is taken as its text where it has one and as itself where it is already plain words, so this does not have to know which shape a version was stored in.";
  let books = await ebible_version_books_testament_new(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  let roots = [];
  async function chapter_read(chapter_code, verses) {
    for (let verse of verses) {
      let said = verse;
      if (!text_is(verse)) {
        said = property_get_or(verse, "text", "");
      }
      list_add_multiple(roots, text_word_roots(said));
    }
  }
  await ebible_chapters_each_verses_list(
    chapter_codes,
    bible_folder,
    chapter_read,
  );
  return roots;
}
