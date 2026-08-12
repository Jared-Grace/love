import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_interlinear_sigla_edition_pairs } from "./bible_interlinear_sigla_edition_pairs.mjs";
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
  let pairs = bible_interlinear_sigla_edition_pairs();
  let openers = {};
  let closers = {};
  function pair_note(pair) {
    openers[pair.open] = pair.edition;
    closers[pair.close] = pair.edition;
  }
  pairs.forEach(pair_note);
  let kept = [];
  let open_edition = "";
  function row_read(row) {
    let value = row[marked_key];
    let missing = equal(value, undefined) || equal(value, null);
    let marked = missing ? "" : String(value);
    let characters = Array.from(marked);
    let opened = "";
    let closed = "";
    function character_read(character) {
      let opens = openers[character];
      if (opens) {
        opened = opens;
      }
      let shuts = closers[character];
      if (shuts) {
        closed = shuts;
      }
    }
    characters.forEach(character_read);
    let inside = not_equal(open_edition, "") || not_equal(opened, "");
    if (not_equal(opened, "")) {
      open_edition = opened;
    }
    if (not_equal(closed, "")) {
      open_edition = "";
    }
    if (inside) {
      return;
    }
    kept.push(row);
  }
  rows.forEach(row_read);
  let emptied = not_equal(rows.length, 0) && equal(kept.length, 0);
  if (emptied) {
    return rows;
  }
  return kept;
}
