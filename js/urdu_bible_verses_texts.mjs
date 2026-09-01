import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_chapters_codes_to_verses } from "./ebible_chapters_codes_to_verses.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export async function urdu_bible_verses_texts() {
  "The wording of every verse of the Urdu bible, in one list, with nothing said about which verse each one is.";
  "Anything asking what this translation does with a word has to see the whole of it. A defect that shows up eleven times in one book is a typing slip; the same defect standing in sixty places across sixty chapters is a habit, and only the whole book tells those apart.";
  "The verse numbers are dropped on purpose. What is counted here is words, and a word carries no less meaning for the reader not being told where it stood.";
  let bible_folder = ebible_folder_urdu();
  let books = await ebible_version_books(bible_folder);
  let chapters_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  let verses_chapters = await ebible_chapters_codes_to_verses(
    bible_folder,
    chapters_codes,
  );
  let verses = list_concat_multiple(verses_chapters);
  function lambda(verse) {
    let text = property_get(verse, "text");
    return text;
  }
  let texts = list_map(verses, lambda);
  return texts;
}
