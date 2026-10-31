import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_bible_quotes_absent } from "./app_en_learn_bible_gloss_urdu_chapters_bible_quotes_absent.mjs";
import { gloss_chapters_claims_wrong_names_generic } from "./gloss_chapters_claims_wrong_names_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_quotes_absent_names() {
  "Every Urdu explanation quoting a chapter of the Bible with words the Urdu Bible on the page does not hold there, named once each by the chapter, the verses the passage covers, the word and the chapter it cited.";
  "★ MEASURED ON 2026-10-31, NINE HUNDRED AND THIRTY-TWO OF NINE HUNDRED AND EIGHTY CITED QUOTES CAME BACK NOT HELD. They read like the older Revised Urdu wording written from memory, and no Urdu-script copy of that version is on the disk to check them against. Which wording a quote should follow is the human's call, so the standing rows are a queue waiting on that answer rather than faults to mend one by one.";
  arguments_assert(arguments, 0);
  let chapters =
    await app_en_learn_bible_gloss_urdu_chapters_bible_quotes_absent();
  let names = gloss_chapters_claims_wrong_names_generic(chapters, "cited");
  return names;
}
