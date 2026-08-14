import { list_to_dictionary_async } from "./list_to_dictionary_async.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { wolff_word_find } from "./wolff_word_find.mjs";
export async function wolff_words_find(words_comma) {
  "Where each of several Cebuano words is answered in Wolff's dictionary, filed under the words as they were asked about.";
  "Asking about a list one word at a time from outside costs a reading of the whole dictionary per word, because each asking is its own run and the run is where the reading is held. Asking here costs one reading for the lot.";
  "The words arrive joined by commas because that is how a list reaches a command here - a command line hands each word over separately, so a function taking a list would keep the first word and quietly drop every one after it.";
  let words = text_split_comma(words_comma);
  let r = await list_to_dictionary_async(words, wolff_word_find);
  return r;
}
