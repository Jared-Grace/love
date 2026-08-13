import { app_ceb_bible_gloss_words_distinct } from "./app_ceb_bible_gloss_words_distinct.mjs";
import { binisaya_words_gather } from "./binisaya_words_gather.mjs";
export async function app_ceb_bible_gloss_words_gather() {
  "Look up every word the Cebuano gloss store explains on binisaya.com, skipping whatever is already held.";
  "It finds its own list from the store rather than being handed one, so a chapter authored after it last ran is covered by running it again, and running it twice over asks for nothing a second time.";
  let words = await app_ceb_bible_gloss_words_distinct();
  let r = await binisaya_words_gather(words);
  return r;
}
