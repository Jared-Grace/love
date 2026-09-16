import { gloss_chapter_pointers_shown_generic } from "./gloss_chapter_pointers_shown_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_chapter_pointers_shown(
  chapter_code,
) {
  "Every place in one Urdu gloss chapter where the reading page now shows a fuller explanation than the one stored - the verse, the English word, the stored line and the line put in its place.";
  "$plain chapter_code";
  "the code is a chapter's name, like ACT01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  let shown = await gloss_chapter_pointers_shown_generic(
    chapter_code,
    app_en_learn_bible_gloss_urdu_generate,
  );
  return shown;
}
