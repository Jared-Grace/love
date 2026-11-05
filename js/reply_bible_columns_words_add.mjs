import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { reply_bible_column_word_score } from "./reply_bible_column_word_score.mjs";
export function reply_bible_columns_words_add(columns, wording_words) {
  "Lines one more wording up against the columns so far, keeping both in order, and returns the columns with it added. A word that fits no column gets a new one.";
  let column_total = columns.length;
  let word_total = wording_words.length;
  let scores = [];
  for (let i = 0; less_than_equal(i, column_total); i++) {
    let scores_row = [];
    for (let j = 0; less_than_equal(j, word_total); j++) {
      let best = subtract(-i, j);
      if (greater_than(i, 0) && greater_than(j, 0)) {
        let fit = reply_bible_column_word_score(
          columns[subtract(i, 1)],
          wording_words[subtract(j, 1)],
        );
        let difference = subtract(scores[subtract(i, 1)][j], 1);
        let difference2 = subtract(scores_row[subtract(j, 1)], 1);
        best = Math.max(
          scores[subtract(i, 1)][subtract(j, 1)] + fit,
          difference,
          difference2,
        );
      }
      scores_row.push(best);
    }
    scores.push(scores_row);
  }
  let joined = [];
  let i = column_total;
  let j = word_total;
  while (greater_than(i, 0) || greater_than(j, 0)) {
    let fit = -1;
    if (greater_than(i, 0) && greater_than(j, 0)) {
      fit = reply_bible_column_word_score(
        columns[subtract(i, 1)],
        wording_words[subtract(j, 1)],
      );
    }
    if (
      greater_than(i, 0) &&
      greater_than(j, 0) &&
      equal(scores[i][j], scores[subtract(i, 1)][subtract(j, 1)] + fit)
    ) {
      let column = columns[subtract(i, 1)];
      let word = wording_words[subtract(j, 1)];
      let held = column.words;
      let b = held.includes(word);
      if (not(b)) {
        held = [...held, word];
      }
      joined.unshift({
        words: held,
        count: column.count + 1,
      });
      i = subtract(i, 1);
      j = subtract(j, 1);
    } else if (
      greater_than(i, 0) &&
      equal(scores[i][j], subtract(scores[subtract(i, 1)][j], 1))
    ) {
      joined.unshift(columns[subtract(i, 1)]);
      i = subtract(i, 1);
    } else {
      joined.unshift({
        words: [wording_words[subtract(j, 1)]],
        count: 1,
      });
      j = subtract(j, 1);
    }
  }
  return joined;
}
