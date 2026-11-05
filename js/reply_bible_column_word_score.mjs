import { text_spelling_near_is } from "./text_spelling_near_is.mjs";
export function reply_bible_column_word_score(column, word) {
  "How well a word fits a column of lined-up wordings: best when the column already holds it, next when it holds another spelling of it, and otherwise a cost.";
  if (column.words.includes(word)) {
    let r = 3;
    return r;
  }
  function near(held) {
    let is = text_spelling_near_is(held, word);
    return is;
  }
  if (column.words.some(near)) {
    let r2 = 2;
    return r2;
  }
  let r3 = -1;
  return r3;
}
