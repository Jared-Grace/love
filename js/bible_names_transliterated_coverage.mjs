import { property_null_is } from "./property_null_is.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_names_transliterated } from "./bible_names_transliterated.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { not } from "./not.mjs";
import { pronunciation_dictionary_path } from "./pronunciation_dictionary_path.mjs";
import { pronunciation_dictionary_words } from "./pronunciation_dictionary_words.mjs";
import { property_get } from "./property_get.mjs";
import { set_includes } from "./set_includes.mjs";
export async function bible_names_transliterated_coverage(bible_folder) {
  "$plain bible_folder";
  "How the bible's names would be said, counted three ways: the ones an English pronouncing dictionary already knows, the ones only the interlinear transliteration reaches, and the ones nothing here can say at all.";
  "★ THE THIRD NUMBER IS THE ONLY ONE THAT IS WORK, AND IT IS WHY THE THREE ARE COUNTED APART. The first two are already answered by files on this disk. Whatever is left over is what a person has to sound out by hand before any of it can be sung, and a single figure for how many names there are says nothing about how big that job is.";
  "The names nothing reaches are handed back rather than counted, because a hundred of them left over is an afternoon and two thousand is a different plan.";
  arguments_assert(arguments, 1);
  let apart = await bible_words_names_apart(bible_folder);
  let names = property_get(apart, "names");
  let path = pronunciation_dictionary_path();
  let entries = await pronunciation_dictionary_words(path);
  let known = list_unique_set(entries);
  function unknown_is(name) {
    let heard = set_includes(known, name);
    let n = not(heard);
    return n;
  }
  let missing = list_filter(names, unknown_is);
  let transliterated = await bible_names_transliterated(bible_folder);
  function untransliterated_is(name) {
    let none = property_null_is(transliterated, name);
    return none;
  }
  function transliterated_is(name) {
    let none = untransliterated_is(name);
    let n = not(none);
    return n;
  }
  let reached = list_filter(missing, transliterated_is);
  let unreached = list_filter(missing, untransliterated_is);
  let left = list_size(names);
  let right = list_size(missing);
  let coverage = {
    names: list_size(names),
    in_dictionary: subtract(left, right),
    transliterated_only: list_size(reached),
    unreached: list_size(unreached),
    unreached_names: unreached,
  };
  return coverage;
}
