import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_chapters_words_respell } from "./gloss_chapters_words_respell.mjs";
export async function app_ceb_bible_gloss_words_respell() {
  "Give every explanation in the Cebuano gloss store the passage's own spelling of the word it is about.";
  "This store explains the Cebuano wording rather than the original language, so the spelling that wins is the first bible's, which is the Cebuano one the passage was cut by.";
  "This corrects what is held here. Putting the corrected chapters where readers get them is a separate step, on purpose: it changes what somebody already reading a chapter sees next time they open it.";
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let r = await gloss_chapters_words_respell(fn, words_read);
  return r;
}
