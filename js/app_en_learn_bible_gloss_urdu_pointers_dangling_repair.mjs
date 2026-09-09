import { gloss_pointers_dangling_repair } from "./gloss_pointers_dangling_repair.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_dangling_repair() {
  "Give a real Urdu explanation to every English word in the English-to-Urdu gloss store whose first explanation in a chapter only points the reader back at a word met earlier, when nothing earlier in that chapter said anything about it.";
  "The store and the reading of what counts as a pointer are named here rather than asked for, because there is one of each and a caller that had to supply them could supply a pair that do not belong together.";
  let repaired = await gloss_pointers_dangling_repair(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
  );
  return repaired;
}
