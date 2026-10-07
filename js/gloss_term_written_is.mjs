import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_term_written_is(wording, term) {
  "Whether a piece of writing uses a given word, asked so that a word standing inside a longer word does not count.";
  "Both sides are lowered, and both are given a space at the front, so a word opening the wording is still found and a word that only sits inside another one is not. Without the space, 'perfect' is inside 'imperfect' and inside 'pluperfect', and an explanation naming one tense would be read as naming three - which turns a single wrong claim into three findings and a right one into two.";
  "Only the front is guarded and not the end, on purpose. What follows a grammatical word in a sentence is a comma, a full stop, or an ending the word has taken on, and refusing all of those would reject the ordinary ways English writes.";
  "THE ONE ENDING THAT IS REFUSED IS -LY, BECAUSE IT STOPS BEING THE SAME WORD. A word carrying it is a manner adverb - 'perfectly', 'imperfectly' - and it describes how something is done rather than naming a tense or a case. No parsing anywhere in the interlinear spells a term that way, so refusing it gives up nothing that could ever have been a real naming, which is what makes this a narrowing rather than a guess.";
  "THE REPO'S OWN PROSE SETTLES THAT THE ADVERB IS ORDINARY ENGLISH AND NOT A TERM. The reasoning written into the list of terms, arguing that words like 'present' were left out because matching them would name sentences that are 'perfectly right', uses the adverb in exactly that way in the very act of ruling ordinary English out. Two findings were raised against explanations reading 'perfectly regular' and 'perfectly clear', and both were right English and wrong findings.";
  "THE ADVERB IS TAKEN OUT OF THE WORDING FIRST, RATHER THAN THE WHOLE WORDING BEING REFUSED WHERE ONE APPEARS. A single sentence may do both at once - name the perfect tense and then say something is perfectly clear - and a reading that refused on sight of the adverb would miss the naming standing beside it. Taking the adverb out leaves a space behind it, so the word that followed it still has its own guard at the front.";
  let wording_lower = text_lower_to(wording);
  let wording_padded = " " + wording_lower;
  let term_lower = text_lower_to(term);
  let term_padded = " " + term_lower;
  let adverb = term_padded + "ly";
  let wording_without_adverb = text_replace_to_space(wording_padded, adverb);
  let written = text_includes(wording_without_adverb, term_padded);
  return written;
}
