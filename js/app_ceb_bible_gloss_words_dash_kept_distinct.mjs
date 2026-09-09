import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
export async function app_ceb_bible_gloss_words_dash_kept_distinct() {
  arguments_assert(arguments, 0);
  ("Every different word the Cebuano gloss store explains, each one whole and with its dash left in it.");
  ("The reading underneath takes a generator, because a store is named by the thing that writes it and there is more than one store. Which generator a Cebuano gloss is written by has one answer, and the readings that ask this question were each naming it for themselves on the line before they asked. Saying it once leaves them about the words.");
  ("The dash is what the name is for. The store's ordinary list of words comes out of a reader that cuts at every dash, so panan-awon reaches it as panan and as awon and never as itself, and a reading that wants to know what the store actually explains cannot use that list. This is the list with the cut not made.");
  ("Three readings ask this. Two of them name the generator on one line and ask on the next, and those call this. The third hands the generator straight in on a single line, so its copy is written differently and the transform that makes this swap does not see it as the same run; it still spells the reading out.");
  let fn = app_ceb_bible_gloss_generate;
  let explained = await gloss_chapters_words_dash_kept_distinct(fn);
  return explained;
}
