import { not } from "./not.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function bible_strong_chapter_verses(chapter_code, strong) {
  "Where in one chapter a Strong's number stands: the number of each verse carrying it, one entry per appearance, in the order they are read.";
  "$plain chapter_code";
  "$plain strong";
  "Neither argument names anything that runs. The chapter code is a place in the text, like JHN05, and the Strong's number is a word's key in whichever numbering its testament uses.";
  "A count alone is not enough to write a sentence with. Knowing a word stands six times in a chapter still leaves this one's place among the six to be remembered, and that is the half a person gets wrong: a sentence saying this is the sixth and last time reads exactly the same when it is the fifth. The list answers both halves at once, because a position is where the word being explained sits in it.";
  "Repeats are kept rather than folded away, so a verse holding a word twice is named twice. Folding them would make the list disagree with the count it is meant to place a word inside.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let verses = property_get(chapters, chapter_code);
  let wanted = number_from_text(strong);
  let key = verse_number_key();
  let verse_numbers = [];
  for (let verse of verses) {
    let words = property_get(verse, "words");
    let verse_number = property_get(verse, key);
    for (let word of words) {
      let candidate = property_get(word, "strong");
      if (not(candidate)) {
        continue;
      }
      let left = number_from_text(candidate);
      let same = equal(left, wanted);
      if (not(same)) {
        continue;
      }
      list_add(verse_numbers, verse_number);
    }
  }
  let r = {
    strong,
    chapter_code,
    verse_numbers,
    total: list_size(verse_numbers),
  };
  return r;
}
