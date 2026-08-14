import { app_ceb_bible_gloss_book_words_owed } from "./app_ceb_bible_gloss_book_words_owed.mjs";
import { binisaya_words_gather } from "./binisaya_words_gather.mjs";
export async function app_ceb_bible_gloss_book_gather(book_code) {
  "Ask the dictionary about every Cebuano word one book of the New Testament needs and does not yet hold, one word at a time.";
  "$plain book_code";
  "the code is a book's name, like MAT, chosen from the Bible's own book numbering. It names text to read and nothing that runs.";
  "This takes hours, because each asking waits the time the site asks to be waited. It is the whole of the preparation a book needs before its explanations can be written, and it is done a book at a time so that the writing of one book overlaps the asking for the next instead of waiting behind all of them.";
  "Nothing is written twice and nothing already held is asked for again, so a run stopped part way through is started again from the top and costs only what it had not yet reached.";
  let owed = await app_ceb_bible_gloss_book_words_owed(book_code);
  let r = await binisaya_words_gather(owed);
  return r;
}
