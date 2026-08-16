import { gloss_term_written_is } from "./gloss_term_written_is.mjs";
import { each_index } from "./each_index.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_words_parsing_carrying_other(
  records,
  index,
  parsing_term,
) {
  "Every word of one passage apart from the one standing at a given place, whose spelled-out parsing carries a given grammatical word.";
  "An explanation is allowed to name a form belonging to a word other than its own - that this word does not agree with the genitive words just before it, that this article has a participle after it rather than a noun. This answers whether the passage holds any word the naming could be about, which is the difference between a reader having somewhere to look and having nowhere.";
  "It answers with the words themselves rather than with a yes or a no, because the reader's next move is to go and look at them.";
  "$plain parsing_term";
  "the term is a word out of the interlinear's own spelled-out parsing, like Genitive or Participle. It names nothing that runs.";
  let carrying = [];
  function record_read(record, index_other) {
    let same = equal(index_other, index);
    if (same) {
      return;
    }
    let parsing = property_get(record, "parsing_long");
    let written = gloss_term_written_is(parsing, parsing_term);
    if (not(written)) {
      return;
    }
    let original = property_get(record, "original");
    list_add(carrying, original);
  }
  each_index(records, record_read);
  return carrying;
}
