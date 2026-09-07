import { text_punctuation_dash_apostrophe_kept_split } from "./text_punctuation_dash_apostrophe_kept_split.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_verses_all } from "./ebible_verses_all.mjs";
import { bible_folder_words_read } from "./bible_folder_words_read.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_words_written_apostrophe_price() {
  "What changes in the list of words the Cebuano bible is written with if it is read without cutting at the apostrophe, named both ways round: the words only today's reading produces, and the words only the other one does.";
  "★ THE READER THIS COMPARES AGAINST HAD TO BE BUILT, WHICH IS ITSELF THE ANSWER TO A QUESTION THAT LOOKED SETTLED. Cebuano keeps a dash inside a word and an apostrophe inside a word, and the reader chosen for it today keeps only the first of those. A reader keeping both already existed and was tried here first, and it cut at spaces alone - which welded 867 pairs into words nobody wrote, kalibotannga and hariug and pinulongannanagbarog, wherever a comma had been standing between two words. Keeping a mark and cutting at punctuation are separate decisions, and only one of them had been made.";
  "The two answers are not the same kind of thing and should not be added up. A word only today's reading produces is one this translation never wrote, invented by the cut; a word only the other reading produces is one the translation did write and today's reading loses. Inventing is the harm - anything afterwards asking this list whether some run of letters is a word gets a yes it has not earned - and losing is a smaller one, because a word missing from the list only ever makes a check stricter than it should be.";
  "Everything is put into small letters first, because the question is whether the letters were written and not whether a sentence happened to start with them.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let verses = await ebible_verses_all(bible_folder);
  let words_read = bible_folder_words_read(bible_folder);
  let today = {};
  let both = {};
  function verse_read(verse) {
    let text = property_get(verse, "text");
    let today_words = words_read(text);
    function today_hold(word) {
      let lowered = text_lower_to(word);
      property_set(today, lowered, true);
    }
    each(today_words, today_hold);
    let both_words = text_punctuation_dash_apostrophe_kept_split(text);
    function both_hold(word) {
      let lowered = text_lower_to(word);
      property_set(both, lowered, true);
    }
    each(both_words, both_hold);
  }
  each(verses, verse_read);
  let today_names = object_property_names(today);
  let both_names = object_property_names(both);
  function both_missing_is(word) {
    let held = property_get_or_null(both, word);
    let missing = null_is(held);
    return missing;
  }
  function today_missing_is(word) {
    let held = property_get_or_null(today, word);
    let missing = null_is(held);
    return missing;
  }
  let only_today = list_filter(today_names, both_missing_is);
  let only_both = list_filter(both_names, today_missing_is);
  let r = {
    today: list_size(today_names),
    both_kept: list_size(both_names),
    only_today: list_size(only_today),
    only_both: list_size(only_both),
    words_only_today: only_today,
    words_only_both: only_both,
  };
  return r;
}
