import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { or } from "./or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_affix_letters_relation(given, quoted, word) {
  "How the letters an explanation quotes for a piece of a word stand to the letters the dictionary gives for it: one set sitting inside the other, a piece cut deeper into the same word, or letters the word does not hold at all.";
  "A count of disagreements says how many there are and not how much is wrong, and here almost none of them are. The dictionary takes tanang apart as tanan and a piece g, where the explanation quotes ng - one letter of disagreement about where the word ends and the piece begins, and the reader is told the truth either way. It takes nagpataas apart as nag over pataas, where the explanation names pa - not the piece the dictionary cut, but a real piece of the same word one layer further in. Neither is a fault. Letters the word does not hold anywhere are, and a reader deciding whether to repair the prose or throw it away has to know which of the three they have.";
  "Reading the word itself is what tells a deeper cut from an invention, and nothing else can. Set against the dictionary's piece alone, pa and nag share no letter and answer apart, which reads as a made-up prefix; set against nagpataas, pa is plainly there. Eight findings answering apart were read by hand before this was added, and every one of them was a deeper cut.";
  "Nothing is folded here, unlike the reading of two roots. Cebuano's letters trade places inside a word, where a d becoming an r leaves the same word; a piece is one or two letters long, so the same folding would make a suffix l and a suffix d read as one piece when they are two.";
  "Letters missing on either side stand apart. Every set of letters holds the empty one, so left unasked a piece written as a bare dash would read as sitting inside whatever it was set against.";
  "$plain given";
  "$plain quoted";
  "$plain word";
  "all three name letters to compare - the dictionary's piece, the explanation's, and the word both are cut from. None of them names anything that runs.";
  let left = text_empty_is(given);
  let right = text_empty_is(quoted);
  let missing = or(left, right);
  if (missing) {
    let r3 = "apart";
    return r3;
  }
  let held = text_includes(given, quoted);
  let holding = text_includes(quoted, given);
  let inside = or(held, holding);
  if (inside) {
    let r = "inside";
    return r;
  }
  let bare = gloss_word_bare(word);
  let deeper = text_includes(bare, quoted);
  if (deeper) {
    let r4 = "deeper";
    return r4;
  }
  let r2 = "apart";
  return r2;
}
