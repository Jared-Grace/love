import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { bible_interlinear_row_marked_text } from "./bible_interlinear_row_marked_text.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
import { bible_interlinear_word_edition_marks } from "./bible_interlinear_word_edition_marks.mjs";
export function bible_interlinear_words_base(rows, marked_key) {
  "One verse's interlinear rows, reduced to the words that belong to the public-domain";
  "base text - every word that belongs to a later edition instead is dropped, span and all.";
  "Receives the verse's rows IN READING ORDER and must see all of them, because a word is";
  "not always marked by itself. A one-word difference arrives wrapped on that one word, but";
  "a several-word difference marks only its FIRST and LAST word - so the words in between";
  "carry no mark at all, and a rule that asked each word about itself would keep them.";
  "That is the whole reason this is a verse-level reader and not a field on one word.";
  "So the marks are read as a span that opens and closes. Anything inside an open span is";
  "dropped whatever it looks like, and the span is closed by its own closing character.";
  "An unclosed span runs to the end of the verse rather than leaking into the next one.";
  "A span covering the WHOLE verse is kept instead, and that is not a safety margin - it";
  "is the mark meaning something else. A wrap says the words inside it belong to one";
  "edition rather than to the base; if that were true of every word of the verse, the base";
  "would not have the verse at all, and a verse no base edition carries would not be here";
  "under a verse number. So a whole-verse wrap is a difference in how the editions read a";
  "verse they all have, and dropping it would delete scripture rather than a variant.";
  "Measured: this rule is what keeps Revelation 20:4 and 9:20, which are wrapped end to";
  "end and would otherwise come back empty.";
  "The wordless rows are dropped FIRST, and that ordering is the whole of it. The tables";
  "pad a verse with blank rows, and a blank row sits after the span's closing mark, so it";
  "is kept - which left a wholly wrapped verse looking like a verse with something still";
  "in it, the whole-verse rule never firing, and Revelation 20:4 coming back empty from a";
  "function written to stop exactly that. A row with no word is not a word.";
  function word_present_is(row) {
    let marked = bible_interlinear_row_marked_text(row, marked_key);
    let word = bible_interlinear_word_base_text(marked);
    let present = not_equal(word, "");
    return present;
  }
  let words = rows.filter(word_present_is);
  let kept = [];
  let open_edition = "";
  function row_read(row) {
    let marked = bible_interlinear_row_marked_text(row, marked_key);
    let marks = bible_interlinear_word_edition_marks(marked);
    let inside = not_equal(open_edition, "") || not_equal(marks.opened, "");
    if (not_equal(marks.opened, "")) {
      open_edition = marks.opened;
    }
    if (not_equal(marks.closed, "")) {
      open_edition = "";
    }
    if (inside) {
      return;
    }
    kept.push(row);
  }
  words.forEach(row_read);
  let emptied = not_equal(words.length, 0) && equal(kept.length, 0);
  if (emptied) {
    return words;
  }
  return kept;
}
