import { set_includes_not } from "./set_includes_not.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { not } from "./not.mjs";
import { pronunciation_dictionary_path } from "./pronunciation_dictionary_path.mjs";
import { pronunciation_dictionary_words } from "./pronunciation_dictionary_words.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_words_pronunciation_coverage(bible_folder) {
  "$plain bible_folder";
  "How much of one bible's vocabulary the pronouncing dictionary on this machine already knows, counted apart for names and for ordinary words, with the words it does not know handed back rather than only counted.";
  "★ THE TWO HALVES ARE COUNTED APART BECAUSE THEY FAIL DIFFERENTLY AND ARE MENDED DIFFERENTLY. An ordinary English word the dictionary misses is a hole in the dictionary, and a small enough number of those can be written out by hand once. A name it misses is not a hole at all - it is a dictionary of English, and the Bible's names are Hebrew and Greek, so they were never going to be in it and never will be. One number covering both would hide which of those two pieces of work is the large one, and the large one decides whether a machine can put this text to a tune without a person spelling it first.";
  "It hands back the missing words themselves, because a count says how much work there is and only the words say what kind of work it is.";
  "The figures written out of digits are set aside before anything is looked up. A dictionary of words has no entry for 930 and never should have one, so counting those as words it does not know would blame it for the one job it was never given; saying them aloud means turning the digits into words first, which is a separate piece of work with a separate answer.";
  arguments_assert(arguments, 1);
  let apart = await bible_words_names_apart(bible_folder);
  let names = property_get(apart, "names");
  let spelled_and_figured = property_get(apart, "common");
  function word_is(word) {
    let figure = text_digits_is(word);
    let n = not(figure);
    return n;
  }
  let common = list_filter(spelled_and_figured, word_is);
  let figures = list_filter(spelled_and_figured, text_digits_is);
  let path = pronunciation_dictionary_path();
  let entries = await pronunciation_dictionary_words(path);
  let known = list_unique_set(entries);
  function unknown_is(word) {
    let n = set_includes_not(known, word);
    return n;
  }
  let names_missing = list_filter(names, unknown_is);
  let common_missing = list_filter(common, unknown_is);
  let coverage = {
    entries: list_size(entries),
    figures: list_size(figures),
    names: list_size(names),
    names_missing: list_size(names_missing),
    common: list_size(common),
    common_missing: list_size(common_missing),
    common_missing_words: common_missing,
    names_missing_words: names_missing,
  };
  return coverage;
}
