import { gloss_chapter_explains_repeated } from "./gloss_chapter_explains_repeated.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_explains_repeated(
  chapter_code,
) {
  "Every explanation in one chapter of the store that explains English words to an Urdu reader which some other word in the same chapter was given word for word, commonest first, each named beside how many words were handed it.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This is the reader to open before mending a chapter. The gate beside it says only how much repetition a store carries; this says which sentences to rewrite and how many words each rewrite frees, which is the whole of what somebody sitting down to the work needs.";
  let repeated = await gloss_chapter_explains_repeated(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return repeated;
}
