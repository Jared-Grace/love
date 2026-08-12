import { equal } from "./equal.mjs";
export function bible_interlinear_row_marked_text(row, marked_key) {
  "One interlinear row's original-language word as the tables mark it, with the editorial";
  "sigla still on it, and an empty string where the row carries no word at all.";
  "The tables pad a verse with rows that have the column and nothing in it, and they also";
  "carry rows for words only the English side supplies, so a missing value here is normal";
  "rather than a fault. It comes back as an empty string so that every reader can ask one";
  "question about the text instead of two questions about whether there is any.";
  let value = row[marked_key];
  let missing = equal(value, undefined) || equal(value, null);
  let marked = missing ? "" : String(value);
  return marked;
}
