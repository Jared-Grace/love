import { gloss_chapters_explains_ranked } from "./gloss_chapters_explains_ranked.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_explains_ranked() {
  "Every wording the store explaining English words to an Urdu reader has written anywhere, the heaviest first.";
  "This is the one to ask before choosing what to write next. Its older twin counts a wording only where a second word in the same chapter was handed it, which hides a sentence used once per chapter however many chapters that is, and a count read off it is a floor rather than a number.";
  "Named for the store rather than taking it as a parameter, because the name is what a person types when they want to know what to rewrite next, and a reading that has to be told which store to read is one more thing to get right at the moment somebody just wants the answer.";
  let r = await gloss_chapters_explains_ranked(
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}
