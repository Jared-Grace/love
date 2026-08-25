import { arguments_assert } from "./arguments_assert.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function pronunciation_dictionary_path() {
  "Where the pronouncing dictionary sits on this machine - the Carnegie Mellon dictionary as its keepers publish it, with a stress digit written after every vowel.";
  "★ IT IS FETCHED RATHER THAN COMMITTED, AND THIS IS THE ONE PLACE THAT SAYS WHERE FROM. It is three and a half megabytes of a dictionary this repo did not write and does not maintain, and what the singing actually needs out of it is the few thousand words the Bible happens to use. So the whole file stays outside the history and the derived answer is what gets kept. Fetch it again with: curl -sSL -o gitignore/cmudict-stress.dict https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict";
  "★ THE COPY SHIPPED WITH THE SPEECH RECOGNISER ALREADY INSTALLED HERE IS NOT THIS ONE, AND IT LOOKS THE SAME UNTIL YOU NEED THE ACCENT. Its words are the same words; a recogniser has no use for stress, so every digit was stripped out of it before it shipped. That copy answers how many syllables a word has and which sounds they are made of, and it silently cannot answer which syllable is accented - which is the half a tune is fitted to. Anything reading a dictionary for stress must read this path and not that one.";
  "The digit is nought for an unstressed syllable, one for the syllable carrying the main stress, and two for a lesser stress.";
  arguments_assert(arguments, 0);
  let path = folder_gitignore_join("cmudict-stress.dict");
  return path;
}
