import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
export async function purge_words_rows_remove(rows) {
  "The rows of a table that hold none of the words a purge took out of this repository's past, read by the same rule the gate over them reads: where a word begins, whatever its capitals.";
  "$plain rows";
  "the rows are lists of text, a generated table's entries before it is written; they are read and filtered, and nothing in them runs.";
  "A TABLE BUILT FROM SOMEONE ELSE'S PAGES IS WHERE A PURGED WORD COMES BACK UNSEEN, because nobody reads ten thousand rows before writing them - the encyclopedia's table carried one, and the gate caught it only after the commit. Dropping the row before the table is written keeps the word out of the present; a name that loses its row loses one button, which is the price of the purge, not of this.";
  let words = await purge_words_allowed();
  let patterns = words.map(
    (row) => new RegExp(text_word_start_regex(row.word), "i"),
  );
  function clean(row) {
    let text = row.join(" ");
    let c = !patterns.some((pattern) => pattern.test(text));
    return c;
  }
  let r = rows.filter(clean);
  return r;
}
