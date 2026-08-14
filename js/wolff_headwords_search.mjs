import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
import { wolff_words_cache } from "./wolff_words_cache.mjs";
export async function wolff_headwords_search(part) {
  "Every headword in Wolff's dictionary whose spelling holds the letters given, answered as a count and the first of them.";
  "$plain part";
  "the part is a run of letters to look for. It is respelled the way the book spells things and used to read what is already held here; nothing reaches anywhere and nothing it is given is run.";
  "Looking a word up whole answers whether the book has that exact spelling, which is the wrong question when the answer is no and you want to know why. A word can be there under a spelling one letter away, or filed with something joined to it, or not there at all - and those three call for three different things to be done next. Only a search over the spellings tells them apart.";
  let words = await wolff_words_cache();
  let keys = object_property_names(words);
  let wanted = wolff_word_key(part);
  let found = list_filter_text_includes(keys, wanted);
  let r = {
    found: list_size(found),
    shown: list_take(found, 40),
  };
  return r;
}
