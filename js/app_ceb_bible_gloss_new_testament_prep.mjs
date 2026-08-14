import { text_lower_to } from "./text_lower_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_ceb_bible_gloss_chapters_absent } from "./app_ceb_bible_gloss_chapters_absent.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapters_bible_words_distinct } from "./gloss_chapters_bible_words_distinct.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { wolff_word_find } from "./wolff_word_find.mjs";
export async function app_ceb_bible_gloss_new_testament_prep() {
  "How much dictionary reading stands between here and a Cebuano gloss of the whole New Testament, counted in words rather than in chapters.";
  "Chapters are the wrong unit for this. The same word stands in dozens of chapters and is looked up once, so the reading is far smaller than the writing, and the two have to be sized apart before either is planned.";
  "The four counts are four different costs. A name costs nothing, because no dictionary carries a person or a place and none needs to. A word already asked about costs nothing. A word the printed dictionary carries costs nothing either, because that book is held here and answers at once. Everything else has to be asked of a website one word at a time with a wait between, which is the only part of this measured in hours.";
  "A word the text never once writes without a capital is taken for a name. Across this many chapters an ordinary word stands mid-sentence somewhere, so the ones left capitalised throughout are the names - a test the text answers itself, where a list of names written out here would go stale the moment a book was added.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let absent = await app_ceb_bible_gloss_chapters_absent();
  let chapter_codes = property_get(absent, "chapter_codes");
  let written = await gloss_chapters_bible_words_distinct(
    bible_folder,
    chapter_codes,
  );
  function lower_is(word) {
    let lowered = text_lower_to(word);
    let same = equal(lowered, word);
    return same;
  }
  let uncapitalised = list_filter(written, lower_is);
  let lowered_all = list_map(written, text_lower_to);
  let words = list_unique(lowered_all);
  let known = await binisaya_words_known();
  async function word_place(word) {
    let ever = list_includes(uncapitalised, word);
    if (not(ever)) {
      let r1 = {
        word,
        place: "named",
      };
      return r1;
    }
    let entry = property_get_or_null(known, word);
    let unasked = null_is(entry);
    if (not(unasked)) {
      let r2 = {
        word,
        place: "asked",
      };
      return r2;
    }
    let answer = await wolff_word_find(word);
    let found = property_get(answer, "found");
    let absent_is = equal(found, "none");
    let carried = not(absent_is);
    if (carried) {
      let r3 = {
        word,
        place: "printed",
      };
      return r3;
    }
    let r4 = {
      word,
      place: "owed",
    };
    return r4;
  }
  let placed = await list_map_async(words, word_place);
  let named = list_filter_property(placed, "place", "named");
  let asked = list_filter_property(placed, "place", "asked");
  let printed = list_filter_property(placed, "place", "printed");
  let owed = list_filter_property(placed, "place", "owed");
  function word_read(item) {
    let word = property_get(item, "word");
    return word;
  }
  let sample = list_take(owed, 40);
  let owed_words = list_map(sample, word_read);
  let r = {
    chapters: property_get(absent, "absent"),
    words: list_size(words),
    named: list_size(named),
    asked: list_size(asked),
    printed: list_size(printed),
    owed: list_size(owed),
    owed_words,
  };
  return r;
}
