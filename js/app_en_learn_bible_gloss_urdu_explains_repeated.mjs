import { gloss_chapter_explains_repeated } from "./gloss_chapter_explains_repeated.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { property_get } from "./property_get.mjs";
export async function app_en_learn_bible_gloss_urdu_explains_repeated(
  chapter_code,
) {
  "Every explanation in one chapter of the store that explains English words to an Urdu reader which some other word in the same chapter was given word for word, commonest first, each named beside how many words were handed it.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This is the reader to open before mending a chapter. The gate beside it says only what share of a store is repetition; this says which sentences to rewrite and how many words each rewrite frees, which is the whole of what somebody sitting down to the work needs.";
  "How many explanations the chapter holds in all is dropped here rather than carried, because a person about to rewrite a sentence is not weighing the chapter against anything - the gate is, and it asks the reading underneath this one.";
  let found = await gloss_chapter_explains_repeated(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  let repeated = property_get(found, "repeated");
  return repeated;
}
