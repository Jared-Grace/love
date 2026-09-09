import { gloss_chapters_explains_repeated_ranked } from "./gloss_chapters_explains_repeated_ranked.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
export async function app_original_bible_gloss_explains_repeated_ranked() {
  "Every wording the store explaining the Bible's original-language words hands to more than one word in a chapter, the heaviest first.";
  "Named for the store rather than taking it as a parameter, because the name is what a person types when they want to know what to rewrite next, and a reading that has to be told which store to read is one more thing to get right at the moment somebody just wants the answer.";
  let r = await gloss_chapters_explains_repeated_ranked(
    app_original_bible_gloss_generate,
  );
  return r;
}
