import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy } from "./list_copy.mjs";
import { bible_interlinear_gloss_key } from "./bible_interlinear_gloss_key.mjs";
import { bible_interlinear_gloss_sort_key } from "./bible_interlinear_gloss_sort_key.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { equal } from "./equal.mjs";
import { text_trim } from "./text_trim.mjs";
import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
import { bible_gloss_lone_marks_dropped } from "./bible_gloss_lone_marks_dropped.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_interlinear_rows_english_text(rows) {
  "$plain rows";
  "the rows are one verse's lines of the interlinear tables, exactly as the tables hold them. They are text to read and nothing that runs.";
  "One interlinear verse as a single run of English, built from every row the verse has and put back into the order the English was worded for.";
  arguments_assert(arguments, 1);
  ("IT IS HANDED THE VERSE'S ROWS AND NOT ITS WORDS, and that difference is the whole reason it exists. The words of a verse are what is left after two drops the ORIGINAL needs and the ENGLISH does not: a row with no original-language word in it, and a row wearing an edition's sigla. Both drops take the row's English away along with the original, and the English of those rows is not an edition's and is not supplied out of nowhere - it is part of the one Berean sentence every chunk here was cut from.");
  ("WHAT THAT COST WAS MEASURED BEFORE THIS WAS WRITTEN. Thirty-two of the twelve hundred and eighty-one verses carrying a picture band came out missing a word of their English, and every one of them was missing rather than reordered. John 14:5 is the plainest: the Berean reads so how can we know the way, the word know rests on a Greek word the SBL edition wraps in its own marks, the wrap dropped the row, and the band read so how can we the way. A reader meets that as a sentence with a hole in it and has no way to learn that a textual variant put it there.");
  ("IT IS SAFE TO SHOW THE ENGLISH WHATEVER EDITION ITS WORD RESTS ON. Dropping an edition's words protects the ORIGINAL text, where the words themselves belong to whoever published that edition. The English is the Berean Standard Bible in every row alike, which this repo already publishes as one of its own translations, so no row's English is more restricted than any other's.");
  ("THE ORDER IS TOTAL AND CANNOT TIE. Measured over the whole table: seven hundred and fifty-four thousand six hundred and forty-seven rows carry that same count of distinct sort numbers, running from one upwards with none missing and none repeated. So the number names a place rather than ranking a group, sorting by it leaves nothing ambiguous, and taking every row of a verse cannot print one English chunk twice.");
  ("The rows are copied before they are sorted, because the rows handed in are the ones every other reader of this verse is holding, and the order they arrive in is the original's.");
  let ordered = list_copy(rows);
  let gloss_key = bible_interlinear_gloss_key();
  let gloss_sort_key = bible_interlinear_gloss_sort_key();
  function gloss_sort_of(row) {
    let value = row[gloss_sort_key] || 0;
    return value;
  }
  list_sort_number_mapper(ordered, gloss_sort_of);
  let glosses = [];
  for (let row of ordered) {
    let raw = row[gloss_key];
    let absent = equal(raw, undefined) || equal(raw, null);
    let text = absent ? "" : String(raw);
    let trimmed = text_trim(text);
    let stripped = bible_gloss_brackets_dropped(trimmed);
    let gloss = bible_gloss_lone_marks_dropped(stripped);
    let filler = bible_glyph_gloss_placeholder_is(gloss);
    if (filler) {
      continue;
    }
    list_add(glosses, gloss);
  }
  let joined = list_join_space(glosses);
  return joined;
}
