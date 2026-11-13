import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { isbe_word_articles_rows } from "./isbe_word_articles_rows.mjs";
import { function_new_getter } from "./function_new_getter.mjs";
export async function isbe_word_articles_write() {
  "Writes the International Standard Bible Encyclopedia's table of names as a function of its own, isbe_word_articles, the way Smith's and Easton's tables are kept, and says how many rows it wrote.";
  "THE TABLE IS WRITTEN, NOT WORKED OUT ON A READER'S PHONE, because working it out reads nine thousand fetched pages and three bibles, and the reader needs only the answer.";
  let rows = await isbe_word_articles_rows();
  let meaning = text_combine_multiple([
    "The entries of the International Standard Bible Encyclopedia, as BibleStudyTools.com publishes it, each as the word or name a verse spells, the article's own title, and the article's file on that site - written by ",
    fn_name("isbe_word_articles_write"),
    ".",
  ]);
  await function_new_getter("isbe_word_articles", meaning, rows);
  let r = {
    rows: rows.length,
  };
  return r;
}
