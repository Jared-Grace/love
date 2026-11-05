import { app_learn_original_gloss_generate } from "./app_learn_original_gloss_generate.mjs";
import { gloss_chapters_words_distinct } from "./gloss_chapters_words_distinct.mjs";
export async function app_learn_original_gloss_words_distinct() {
  "Every different Hebrew and Greek word the gloss store explains, each counted once.";
  let words = await gloss_chapters_words_distinct(
    app_learn_original_gloss_generate,
  );
  return words;
}
