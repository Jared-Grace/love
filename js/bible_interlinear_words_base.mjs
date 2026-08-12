import { bible_interlinear_sigla_edition_pairs } from "./bible_interlinear_sigla_edition_pairs.mjs";
("One verse's interlinear rows, reduced to the words that belong to the public-domain");
("base text - every word that belongs to a later edition instead is dropped, span and all.");
("Receives the verse's rows IN READING ORDER and must see all of them, because a word is");
("not always marked by itself. A one-word difference arrives wrapped on that one word, but");
("a several-word difference marks only its FIRST and LAST word - so the words in between");
("carry no mark at all, and a rule that asked each word about itself would keep them.");
("That is the whole reason this is a verse-level reader and not a field on one word.");
("So the marks are read as a span that opens and closes. Anything inside an open span is");
("dropped whatever it looks like, and the span is closed by its own closing character.");
("An unclosed span runs to the end of the verse rather than leaking into the next one.");
export function bible_interlinear_words_base(rows, marked_key) {
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
    let missing = value === undefined || value === null;
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
    let inside = open_edition !== "" || opened !== "";
    if (opened !== "") {
      open_edition = opened;
    }
    if (closed !== "") {
      open_edition = "";
    }
    if (inside) {
      return;
    }
    kept.push(row);
  }
  rows.forEach(row_read);
  return kept;
}
