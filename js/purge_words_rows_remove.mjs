import { not } from "./not.mjs";
import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
export async function purge_words_rows_remove(rows) {
  "The rows of a table that hold none of the words a purge took out of this repository's past, read by the same rule the gate over them reads: where a word begins, whatever its capitals.";
  "$plain rows";
  "the rows are lists of text, a generated table's entries before it is written; they are read and filtered, and nothing in them runs.";
  "A TABLE BUILT FROM SOMEONE ELSE'S PAGES IS WHERE A PURGED WORD COMES BACK UNSEEN, because nobody reads ten thousand rows before writing them - the encyclopedia's table carried one, and the gate caught it only after the commit. Dropping the row before the table is written keeps the word out of the present; a name that loses its row loses one button, which is the price of the purge, not of this.";
  let words = await purge_words_allowed();
  function lambda(row) {
    let pattern2 = text_word_start_regex(row.word);
    let r2 = new RegExp(pattern2, "i");
    return r2;
  }
  let patterns = words.map(lambda);
  function clean(row) {
    let text = row.join(" ");
    function lambda2(pattern) {
      let r3 = pattern.test(text);
      return r3;
    }
    let b = patterns.some(lambda2);
    let c = not(b);
    return c;
  }
  let r = rows.filter(clean);
  return r;
}
