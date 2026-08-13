import { gloss_chapters_misaligned_show } from "./gloss_chapters_misaligned_show.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_misaligned_show() {
  "Every passage left in the Cebuano gloss store that needs explanations written back in, laid out to write them by.";
  "This store glosses the Cebuano wording rather than the original language, so the words laid out are the first bible's, which is the Cebuano one the passage was cut by.";
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let r = await gloss_chapters_misaligned_show(fn, words_read);
  return r;
}
