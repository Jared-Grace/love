import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_words_generic } from "./gloss_words_generic.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_words } from "./ebible_version_words.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_intersect } from "./list_set_intersect.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
export async function gloss_words_apart_generic(fn, bible_folder) {
  "$plain bible_folder";
  "Every different thing one gloss store explains, split into the words the bible writes and the pieces of words it does not.";
  "★ AN EXPLANATION CAN EXPLAIN SOMETHING THAT IS NOT A WORD, AND UNTIL THIS EXISTED NOTHING NOTICED. Somebody explaining a verse may cut a word to explain a piece of it. God's became God and s in Romans 1, with the s glossed as the suffix that shows possession; non-Greeks became non and Greeks, with the non glossed as the prefix that turns the next word around. Both pieces then sat in the store looking exactly like words, each with a gloss of its own, and both were asked for a recording no voice can make.";
  "★ THE DROP IS NAMED RATHER THAN SILENT, WHICH IS THE WHOLE REASON THIS HANDS BACK TWO LISTS AND NOT ONE. A filter that quietly shortened the list would be a filter nobody could check, and the day it threw away a real word it would say exactly what it says on a good day. The pieces travel out beside the words, so what was dropped can always be read, and the count of everything explained travels with them.";
  "The bible's own spelling is what settles it, because a piece is precisely a thing the text never writes on its own. That test needs no dictionary, no network and no judgment, and it holds for the chapter somebody authors tomorrow.";
  "A word the bible writes and nobody has explained is not this reading's business - it is asked about the store, and the store is the one that decides which words get a button.";
  arguments_assert(arguments, 2);
  let explained = await gloss_words_generic(fn);
  let said = property_get(explained, "words");
  let spelled = await ebible_version_words(bible_folder);
  let vocabulary = list_unique_set(spelled);
  let words = list_set_intersect(said, vocabulary);
  let pieces = list_set_difference(said, vocabulary);
  let r = {
    chapters: property_get(explained, "chapters"),
    entries: property_get(explained, "entries"),
    distinct: property_get(explained, "distinct"),
    words: words,
    pieces: pieces,
  };
  return r;
}
