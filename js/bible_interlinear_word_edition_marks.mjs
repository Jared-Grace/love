import { bible_interlinear_sigla_edition_pairs } from "./bible_interlinear_sigla_edition_pairs.mjs";
export function bible_interlinear_word_edition_marks(marked) {
  "Which edition a marked interlinear word OPENS a span for and which one it CLOSES, each";
  "an empty string where the word does that for no edition at all.";
  "A word can do both at once, and a word can do neither. It is read as two separate";
  "answers rather than one because they mean different things to the reader walking a";
  "verse: an opening puts the words that follow inside an edition, a closing lets them out";
  "again, and a word wrapped by itself does both and is inside its own span.";
  "The last mark of each kind wins where a word carries more than one, which is what the";
  "double square bracket of the ECM needs - it opens twice and the second opening says the";
  "same thing as the first.";
  let pairs = bible_interlinear_sigla_edition_pairs();
  let opened = "";
  let closed = "";
  function pair_read(pair) {
    let opens = marked.includes(pair.open);
    if (opens) {
      opened = pair.edition;
    }
    let shuts = marked.includes(pair.close);
    if (shuts) {
      closed = pair.edition;
    }
  }
  pairs.forEach(pair_read);
  let r = {
    opened,
    closed,
  };
  return r;
}
