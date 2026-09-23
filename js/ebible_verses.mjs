import { ebible_verses_kept } from "./ebible_verses_kept.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  "$plain chapter_code";
  "$plain bible_folder";
  "Cuts one chapter of a Bible into its verses, each with the number it is known by, and hands back only the ones that have words in them.";
  "Where each verse begins is written into the source page, so the cutting goes by that and searches for nothing.";
  "It used to search. A chapter was flattened into one run of words with the verse numbers standing among them as words of their own, and each number was then hunted down from the end of the chapter backwards. The hunt had no way to tell a number that marks a verse from a number the verse happens to say, and it was wrong: Cebuano 2 Kings 25 verse 17 opens on the words eighteen cubits, so eighteen was taken for the start of verse 18, verse 17 was left with nothing in it and dropped, and nothing anywhere said so.";
  "Both readings begin at the same page, and this one is written down rather than worked out, so it is the answer wherever they disagreed.";
  "Anything standing before the first number is kept as a verse of its own under a nought, because a chapter often opens with a title or a heading and dropping it would lose words that are in the book. A chapter with nothing standing there loses its nought, since a nought with nothing in it has no words and is dropped by the same test as any other verse.";
  "A verse the translation printed no words for is dropped. Those are places the translation has nothing to say rather than verses somebody could read, and a reader shown a numbered blank would take it for a fault in the app. The dropping is the whole of what this adds to the cut beneath it, and it is the reason the two are separate: a reading that has to see what was dropped asks the cut instead.";
  let all = await ebible_verses_kept(bible_folder, chapter_code);
  let verses = list_filter(all, ebible_verse_words_is);
  return verses;
}
