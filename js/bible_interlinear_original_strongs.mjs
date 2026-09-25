import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
export async function bible_interlinear_original_strongs() {
  "Every Hebrew and Greek spelling in the Bible beside the number its dictionary entry is known by, so that two forms of one word can be met as one rather than as strangers.";
  "AN ORIGINAL-LANGUAGE WORD ALMOST NEVER APPEARS TWICE IN THE SAME SHAPE. God, of God, to God are three spellings of one word in Greek, and a reading that meets words by how they are spelled counts all three as different words. Measured on 2026-09-25, a check asking whether an explanation's word stands in the verse it named called eighty-five claims in every hundred wrong in the original-language store and twenty in every hundred in the Urdu one, and the whole of that difference is the ending of a word moving.";
  "The number is taken rather than a rule for cutting endings off being written. Somebody has already decided, word by word through the whole Bible, which entry of the dictionary each spelling belongs to, and that decision is in the interlinear beside the word. A rule guessed here would be a second opinion about the same thing, free to disagree with the first, and it would disagree most exactly where the languages are least regular.";
  "★ EVERY SPELLING IS WRITTEN DOWN TWICE, ONCE AS THE INTERLINEAR SPELLS IT AND ONCE CUT THE WAY A VERSE IS CUT INTO WORDS, BECAUSE THE TWO SIDES OF THE QUESTION ARRIVE HERE SPELLED DIFFERENTLY. The interlinear keeps the marks the scribes wrote onto a word - the stop at the end of a verse, the little bar that joins one word to the next - as letters of the spelling, so it holds haaretz-with-a-stop and never haaretz. Whoever asks about a verse has cut that verse into words first, and that cutting throws every such mark away, so it can only ever ask about haaretz. Measured on 2026-09-25, fifteen words in every hundred of the whole interlinear carry one of those marks, and before this every one of them was unfindable from the verse side - which made a check over the original-language store name a verse-final word as unrelated to itself.";
  "Capitals are folded away before a spelling is written down, because the same word carries one at the start of a verse and none in the middle of it, and the two are not two words.";
  "A spelling the interlinear gives no number for is left out rather than written down as having none. Whoever asks can tell nothing here apart from nothing known, and a missing entry says the second, which is the truth.";
  "One spelling answering to two numbers keeps the last it was given. That happens where one shape belongs to two entries, and no reading of the spelling alone could tell them apart anyway - the alternative is not a better answer but a longer way of writing the same guess. The cut spelling of one word can only ever collide with the whole spelling of a word that differs from it by punctuation alone, which is the same word again.";
  arguments_assert(arguments, 0);
  let chapters = await bible_interlinear_chapters_words_cache();
  let strongs = {};
  function word_read(word) {
    let original = property_get(word, "original");
    let strong = property_get(word, "strong");
    let none = equal(strong, "");
    if (none) {
      return;
    }
    let key = text_lower_to(original);
    property_set(strongs, key, strong);
    function part_read(part) {
      property_set(strongs, part, strong);
    }
    let parts = text_punctuation_dash_kept_split(key);
    each(parts, part_read);
  }
  function verse_read(verse) {
    let words = property_get(verse, "words");
    each(words, word_read);
  }
  function chapter_read(verses) {
    each(verses, verse_read);
  }
  each_object(chapters, chapter_read);
  return strongs;
}
