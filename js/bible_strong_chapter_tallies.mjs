import { object_property_names } from "./object_property_names.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_strong_chapter_tallies() {
  "How many times each Strong's number stands in each chapter of the Bible, as an object from a chapter's code to a tally of its numbers.";
  "A word explanation is allowed to say that a word stands only here, or twice in this Gospel, or nowhere else in the New Testament. Every one of those is a count, not an opinion, and until this existed there was no way to make one except by believing whoever wrote it. Counting is done once for the whole book so that a claim about any scope is a sum over these, and a reader asking about one word does not walk a 237 MB table to get an answer.";
  "The Strong's number is what is counted rather than the written word, because that is what the same word looks like across its forms - a verb standing in six shapes is one word making six appearances, and counting the shapes would answer a question nobody asked.";
  "A word the table gives no number is left out entirely rather than gathered under a blank key. It is a real gap in the source, and a count that quietly folded those together would read as an answer.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let tallies = {};
  for (let chapter_code of object_property_names(chapters)) {
    let verses = property_get(chapters, chapter_code);
    let strongs = [];
    for (let verse of verses) {
      let words = property_get(verse, "words");
      for (let word of words) {
        let strong = property_get(word, "strong");
        if (!strong) {
          continue;
        }
        list_add(strongs, strong);
      }
    }
    tallies[chapter_code] = list_tally(strongs);
  }
  return tallies;
}
