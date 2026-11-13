import { subtract } from "./subtract.mjs";
import { isbe_word_articles_rows } from "./isbe_word_articles_rows.mjs";
import { purge_words_rows_remove } from "./purge_words_rows_remove.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_new_getter } from "./function_new_getter.mjs";
export async function isbe_word_articles_write() {
  ("Writes the International Standard Bible Encyclopedia's table of names as a function of its own, ",
    fn_name("isbe_word_articles"),
    ", the way Smith's and Easton's tables are kept, and says how many rows it wrote.");
  ("THE TABLE IS WRITTEN, NOT WORKED OUT ON A READER'S PHONE, because working it out reads nine thousand fetched pages and three bibles, and the reader needs only the answer.");
  ("NO ROW HOLDING A PURGED WORD IS WRITTEN, because a table nobody reads row by row is exactly where one comes back.");
  let rows2 = await isbe_word_articles_rows();
  let rows = await purge_words_rows_remove(rows2);
  let meaning = text_combine_multiple([
    "The entries of the International Standard Bible Encyclopedia, as BibleStudyTools.com publishes it, each as the word or name a verse spells, the article's own title, and the article's file on that site - written by ",
    fn_name("isbe_word_articles_write"),
    ".",
  ]);
  await function_new_getter(fn_name("isbe_word_articles"), meaning, rows);
  let r = {
    rows: rows.length,
    removed: subtract(rows2.length, rows.length),
  };
  return r;
}
