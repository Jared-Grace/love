import { ebible_chapters_words } from "./ebible_chapters_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_version_book_words(bible_folder, book_code) {
  "$plain bible_folder";
  "$plain book_code";
  "Every different word one book of one bible spells, lowercased, in alphabetical order, counting as one word whatever somebody explaining the passage would put on one button.";
  "★ THIS IS WHAT MAKES A WORD'S SOUND ANSWERABLE BEFORE ANYBODY HAS AUTHORED THE CHAPTER. The words the gloss apps explain are the verse's own words rather than anything an explanation invents, so the vocabulary of the app is the vocabulary of the text, and it can be read off the bible months ahead of the explaining. Checked against the forty-four chapters glossed so far, the text names all but three of the two and a half thousand words already recorded, and those three are apostrophes at the end of a plural possessive.";
  "★ IT KEEPS THE DASH, WHICH IS NOT HOW ENGLISH'S OWN WORDS ARE READ. The reader chosen by language cuts English at every dash and is right to: a hyphenated pair is two words. But the question here is not what the words of the language are, it is what an author will treat as one entry - and the store answers that, holding demon-possessed, mother-in-law and well-pleasing whole. Cutting them would leave exactly the silent button this function exists to prevent.";
  "Measured before choosing: cutting at dashes misses ten of the words already recorded, keeping them whole misses three, and doing both at once still misses the same three for two hundred more words. So whole is not a compromise between the two readings, it is the cheaper of the two right ones.";
  "★ IT CUTS AT PUNCTUATION AS WELL, AND READING IT ANY OTHER WAY WELDED WORDS TOGETHER. The reader here before this one cut at the space alone and then took punctuation out of what was left, so an em dash standing between two words was deleted rather than cut at. Measured over the whole English bible that welded 1303 pairs into words nobody wrote - abednegowho, abominationsneither, exilescelebrated - and hid 44 real words behind them. Cutting at punctuation and keeping the dash inside a word are separate decisions and the reader now makes both.";
  "The reading itself is next door, shared with the one that asks the same question about a whole bible. What is here is the choosing of the chapters and nothing else.";
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
  let words = ebible_chapters_words(chosen);
  return words;
}
