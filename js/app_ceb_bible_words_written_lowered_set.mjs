import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written_lowered_set } from "./bible_words_written_lowered_set.mjs";
export async function app_ceb_bible_words_written_lowered_set() {
  arguments_assert(arguments, 0);
  ("Every spelling the Cebuano translation this app reads writes anywhere, in small letters and gathered as a set, so that a word can be put to it one at a time.");
  ("Four readings ask whether a run of letters stands in this translation as a word on its own - a root written with a bracket in it, a root written with an accent on it, a root nothing in the dictionary is built from, and a dashed word the dictionary has never been asked about - and every one of them named the Cebuano folder and then asked that folder for this set. There is one Cebuano translation on this disk, so the folder was never a choice any of them was making; saying it here leaves each of them about the words it is asking after.");
  ("Names are in it, unlike the reading of the common words beside this one, because the question these four are asking is whether this exact spelling stands in the text and a name is text.");
  let bible_folder = ebible_folder_cebuano();
  let vocabulary = await bible_words_written_lowered_set(bible_folder);
  return vocabulary;
}
