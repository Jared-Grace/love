import { app_en_learn_bible_gloss_urdu_pointers_owed_wordings } from "./app_en_learn_bible_gloss_urdu_pointers_owed_wordings.mjs";
import { gloss_pointers_dangling_repair_wordings } from "./gloss_pointers_dangling_repair_wordings.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_owed_apply() {
  "Write the hand-written Urdu wordings over every English word in the English-to-Urdu gloss store still wearing a pointer that leads nowhere.";
  "This is the second half of the repair and the last one. The first half asked the store to answer out of its own settled wordings and mended everything it could; what stayed behind is what the store has never explained anywhere, and only a written wording reaches those.";
  let wordings = app_en_learn_bible_gloss_urdu_pointers_owed_wordings();
  let repaired = await gloss_pointers_dangling_repair_wordings(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
    wordings,
  );
  return repaired;
}
