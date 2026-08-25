import { arguments_assert } from "./arguments_assert.mjs";
export function pronunciation_dictionary_path() {
  "Where the pronouncing dictionary sits on this machine - the copy of the Carnegie Mellon dictionary that came with the speech recogniser already installed here.";
  "★ THIS COPY CARRIES NO STRESS MARKS, AND THE STRESS IS THE HALF THE SINGING NEEDS. Carnegie Mellon publishes the dictionary with a digit written after every vowel - nought for an unstressed syllable, one for the stressed one, two for a lesser stress - and a speech recogniser has no use for those, so the copy shipped alongside one has them stripped out. What is on this disk answers how many syllables a word has and which sounds they are made of. Which syllable is accented is not in it, and has to come from the published dictionary, which is not here.";
  "It is spelled out in one place rather than at each caller, so the day the published dictionary is fetched there is a single line to point somewhere else, and one function's prose to correct rather than several.";
  arguments_assert(arguments, 0);
  let path = "/usr/share/pocketsphinx/model/en-us/cmudict-en-us.dict";
  return path;
}
