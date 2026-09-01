import { urdu_glued_words_decided_two } from "./urdu_glued_words_decided_two.mjs";
import { property_get } from "./property_get.mjs";
export function urdu_glued_words_split(text) {
  "One piece of writing with the missing spaces put back into it: every word that was ruled to be two words run together is spelled with its space, and everything else is handed back untouched.";
  "It reads whole words and only whole words. The pattern it matches is a run of letters, so a word is only ever replaced where the text already had it standing alone, and a decided word sitting inside a longer word is left alone — which is what stops a repair from cutting into the middle of something it was never ruled on.";
  "Nothing but the letters is looked at. Whatever stood between the words — a space, a comma, a full stop, a quotation mark, a line ending — comes back exactly as it was, because the parts of the text that are not letters are never in the match.";
  "It is safe to run over writing in any language. Every word it knows is written in the Urdu script, so text in another script matches nothing and comes back as it went in.";
  let decided = urdu_glued_words_decided_two();
  let split = property_get(decided, "split");
  let words = new RegExp("[\\p{L}\\p{M}]+", "gu");
  function lambda(word) {
    let spaced = split[word];
    let chosen = spaced ? spaced : word;
    return chosen;
  }
  let repaired = text.replace(words, lambda);
  return repaired;
}
