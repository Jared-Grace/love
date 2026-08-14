import { invoke_cache_file_global } from "./invoke_cache_file_global.mjs";
import { wolff_derived_words } from "./wolff_derived_words.mjs";
export async function wolff_derived_words_cache() {
  "The dictionary's built forms already filed under the spellings a text writes them with, kept on this disk so that looking one up costs a reading rather than a walk through the whole book.";
  "It is held apart from the headwords rather than folded in with them, because the two answer different questions and a caller has to be able to tell which one answered. A word found among the headwords is that word; a word found here is a form of some other word, and an explanation written from the two without knowing the difference would name the wrong word as the one being read.";
  "It is read back once a run however often it is asked for, because it is large and a caller asking about a list of words asks for the whole of it once per word.";
  let r = await invoke_cache_file_global(wolff_derived_words, []);
  return r;
}
