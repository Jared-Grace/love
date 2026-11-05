import { less_than } from "./less_than.mjs";
import { reply_bible_columns_words_add } from "./reply_bible_columns_words_add.mjs";
export function reply_bible_wordings_columns(wordings) {
  "The wordings of one verse lined up word by word. Each column holds the words the Bibles use at that place, and is optional when some Bible has nothing there. The ways the Bibles write the name of Jesus become one word, because the rule reads that word as every form of the name.";
  let columns = [];
  for (let wording of wordings) {
    let named = wording.replace(
      /\b(jesus christ|christ jesus|iesus christ|yeshua the messiah)\b/g,
      "jesus",
    );
    let wording_words = named.split(" ");
    columns = reply_bible_columns_words_add(columns, wording_words);
  }
  let total = wordings.length;
  function column_finish(column) {
    let finished = {
      words: column.words,
      optional: less_than(column.count, total),
    };
    return finished;
  }
  let finished_all = columns.map(column_finish);
  return finished_all;
}
