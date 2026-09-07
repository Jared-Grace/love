import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_words_apostrophe_kept } from "./text_words_apostrophe_kept.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function ebible_version_book_words(bible_folder, book_code) {
  "$plain bible_folder";
  "$plain book_code";
  "Every different word one book of one bible spells, lowercased, in alphabetical order.";
  "★ THIS IS WHAT MAKES A WORD'S SOUND ANSWERABLE BEFORE ANYBODY HAS AUTHORED THE CHAPTER. The words the gloss apps explain are the verse's own words rather than anything an explanation invents, so the vocabulary of the app is the vocabulary of the text, and it can be read straight off the bible months ahead of the explaining. Checked against the forty-four chapters glossed so far: the text gives 2,710 different words where the store had 2,623, and the difference is the chapters authored since the last recording rather than a disagreement about what a word is.";
  "★ THE WORDS ARE READ WITH THE ENGLISH READER, WHICH CUTS AT EVERY DASH. That is right for English, where a dash only ever joins two words, and wrong for a language that spells a sound inside a word with one - so a bible in such a language wants the reader beside it rather than this function.";
  "One book at a time rather than a list of them, because the caller that wants the whole bible wants to finish a book and be able to stop, and a caller that wants one book would otherwise have to wrap it in a list to ask.";
  arguments_assert(arguments, 2);
  let chapters = await ebible_version_chapters_cache(bible_folder);
  function chapter_book_is(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let book = ebible_chapter_code_to_book(chapter_code);
    let is = equal(book, book_code);
    return is;
  }
  let chosen = list_filter(chapters, chapter_book_is);
  let words = [];
  function chapter_each(chapter) {
    let verses = property_get(chapter, "verses");
    function verse_each(verse) {
      let text = property_get(verse, "text");
      let said = text_words_apostrophe_kept(text);
      function word_each(word) {
        let lower = text_lower_to(word);
        list_add(words, lower);
      }
      each(said, word_each);
    }
    each(verses, verse_each);
  }
  each(chosen, chapter_each);
  let unique = list_unique(words);
  list_sort_text(unique);
  return unique;
}
