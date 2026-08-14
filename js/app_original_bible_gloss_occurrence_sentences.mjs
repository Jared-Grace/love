import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { gloss_word_occurrence_sentence } from "./gloss_word_occurrence_sentence.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_occurrence_sentences(
  chapter_code,
) {
  "Every sentence about rarity that the counts themselves would write for the words of one chapter, each set beside the word it belongs to.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN04, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This writes nothing into the store. It is the generator shown working, so that what it produces can be read next to what an author wrote before anybody agrees to let it stand in a published explanation - and so that a chapter nobody has authored yet can be asked what it would be told, which is a thing a checker could never answer.";
  "The words are read from the interlinear rather than from the authored explanations, so the answer does not depend on a chapter having been written. A word whose counts say nothing unusual is left out entirely, which is why a long chapter comes back short.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let verses_interlinear = property_get(chapters, chapter_code);
  if (null_is(verses_interlinear)) {
    let unknown = {
      chapter_code,
      verses: 0,
      sentences: [],
    };
    return unknown;
  }
  let tallies = await bible_strong_chapter_tallies_cache();
  let sentences = [];
  function verse_read(verse) {
    let property_name = verse_number_key();
    let verse_number = property_get(verse, property_name);
    let words = property_get(verse, "words");
    function word_read(word) {
      let sentence = gloss_word_occurrence_sentence(
        tallies,
        chapter_code,
        word,
      );
      if (null_is(sentence)) {
        return;
      }
      let written = {
        verse_number,
        word: property_get(word, "original"),
        gloss: property_get(word, "gloss"),
        sentence,
      };
      list_add(sentences, written);
    }
    each(words, word_read);
  }
  each(verses_interlinear, verse_read);
  let r = {
    chapter_code,
    verses: list_size(verses_interlinear),
    sentences,
  };
  return r;
}
