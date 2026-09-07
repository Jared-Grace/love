import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_glosses_empty } from "./gloss_chapters_glosses_empty.mjs";
export async function app_en_learn_bible_gloss_urdu_glosses_empty() {
  "Every chapter of English words explained in Urdu carrying an explanation whose Urdu meaning is blank, and the English words it left blank.";
  "The reader here is learning English and cannot read the English word, so the Urdu meaning is the one piece of the row they can already understand. A blank there is not a smaller row - it is the row with its answer taken out.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapters_glosses_empty(fn);
  return r;
}
