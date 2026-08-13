import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { property_get } from "./property_get.mjs";
import { urdu_allah_to_god } from "./urdu_allah_to_god.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  "$plain chapter_code";
  "$plain bible_folder";
  "Cuts one chapter of a Bible into its verses, each with the number it is known by.";
  "Where each verse begins is written into the source page, so the cutting goes by that and searches for nothing.";
  "It used to search. A chapter was flattened into one run of words with the verse numbers standing among them as words of their own, and each number was then hunted down from the end of the chapter backwards. The hunt had no way to tell a number that marks a verse from a number the verse happens to say, and it was wrong: Cebuano 2 Kings 25 verse 17 opens on the words eighteen cubits, so eighteen was taken for the start of verse 18, verse 17 was left with nothing in it and dropped, and nothing anywhere said so.";
  "Both readings begin at the same page, and this one is written down rather than worked out, so it is the answer wherever they disagreed.";
  "Anything standing before the first number is kept as a verse of its own under a nought, because a chapter often opens with a title or a heading and dropping it would lose words that are in the book.";
  "A verse left with nothing in it once the empty brackets are taken out is dropped. Those are places the translation has no words for rather than verses somebody could read, and a reader shown a numbered blank would take it for a fault in the app.";
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let before = property_get(cut, "before");
  let marked = property_get(cut, "verses");
  let verse_number = ebible_verses_before();
  let heading = ebible_verse_new_text(before, verse_number);
  let all = list_copy(marked);
  list_add_first(all, heading);
  function lambda(item) {
    let text = property_get(item, "text");
    let normalized = whitespace_normalize(text);
    let worded = urdu_allah_to_god(normalized);
    let number = property_get(item, "verse_number");
    let v = ebible_verse_new_text(worded, number);
    return v;
  }
  let mapped = list_map(all, lambda);
  let verses = list_filter(mapped, ebible_verse_words_is);
  return verses;
}
