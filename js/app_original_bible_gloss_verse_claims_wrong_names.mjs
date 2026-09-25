import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_verse_claims_wrong } from "./app_original_bible_gloss_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_names } from "./gloss_chapters_claims_wrong_names.mjs";
export async function app_original_bible_gloss_verse_claims_wrong_names() {
  "Every original-language word explanation naming a verse of its own chapter that holds nothing written with the same word, named once each by the chapter, the verses the passage covers, the word and the verse it named.";
  "★ THIS STORE IS KEYED ON STRONG'S NUMBERS RATHER THAN ON SPELLING, AND THAT IS THE WHOLE DIFFERENCE BETWEEN A GATE PEOPLE READ AND ONE THEY LEARN TO IGNORE. Hebrew and Greek inflect: the same word wears a different ending in almost every verse it stands in, so asking whether the spelling in the explanation stands again in verse nine answers no nearly every time it is asked. Measured on 2026-09-25 that reading called six hundred and thirteen of seven hundred and seventeen claims unheld, which is five in six. Keying on the Strong's number the interlinear already carries on every word takes the same seven hundred and seventeen claims down to three hundred and seventeen, because the number is what the endings vary around.";
  "Two faults in the reading itself came out of the same measurement and were mended for all three stores at once: a full stop was being read through, so a sentence ending in the whole verse followed by Two doing words named verse two; and a verse named as a distance - the verse two back - was read as a verse number. With those the count came to about one hundred and ninety-five across seventy-six chapters, from five hundred and fifty-one claims.";
  "How a row is named is the same in every store, so it is asked for rather than written out here.";
  arguments_assert(arguments, 0);
  let chapters = await app_original_bible_gloss_chapters_verse_claims_wrong();
  let names = gloss_chapters_claims_wrong_names(chapters);
  return names;
}
