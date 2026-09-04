import { urdu_names_decided } from "./urdu_names_decided.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function urdu_names_respelled(text) {
  "One piece of Urdu writing with every name in it spelled the way whoever reads Urdu has ruled it should be spelled.";
  "A name is looked for as a whole word and never inside a longer one, so a ruling about one name cannot reach into another word that happens to begin the same way. A word nobody has ruled on comes back exactly as it arrived, which is almost every word: the table starts empty, and until somebody writes a ruling into it this hands back what it was given.";
  "The table is asked for a word rather than read straight off it, because a word that happens to spell something every object already answers to would otherwise hand back machinery instead of a name.";
  "Give this a verse and it would rewrite the verse, so do not: the one thing that keeps this away from another publisher's scripture is that only an explanation is ever passed in.";
  let decided = urdu_names_decided();
  let respell = property_get(decided, "respell");
  let words = new RegExp("[\\p{L}\\p{M}]+", "gu");
  function lambda(word) {
    let respelled = property_or_null(respell, word);
    let undecided = null_is(respelled);
    if (undecided) {
      return word;
    }
    return respelled;
  }
  let mapped = text.replace(words, lambda);
  return mapped;
}
