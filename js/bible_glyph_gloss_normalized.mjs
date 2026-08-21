import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_glyph_gloss_normalized(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "One wording the interlinear printed, reduced to the English word underneath it, so that two rows differing only by grammar stop counting as two meanings.";
  "The interlinear glosses a word in the place it stands, which means it glosses the GRAMMAR along with the word. God, of God, to God and God's are one word four times over, wearing the case the Greek put it in. Counting those as four meanings makes a plain word look ambiguous, and it made the first run of this survey report sixty eight senses for God, which is not a fact about God but a fact about English prepositions.";
  "So the leading function words go, the possessive tail goes, and the square brackets and braces the tables use for words the translation supplies go with them. What is left is the word.";
  "CAPITALISATION STAYS, and that is a deliberate choice rather than an oversight. Man and Man are the same word in English but Son of Man is a title, and the tables mark the title by capitalising it; folding case would erase the one signal separating a title from a common noun. Holy and holy stay apart for the same reason. The cost is that a word starting a sentence counts separately from the same word inside one, which inflates the count a little - a smaller and more honest error than erasing titles.";
  "THE MARKS AROUND A SUPPLIED WORD ARE TAKEN OFF NEXT DOOR AND NOT HERE, because the band of English under the pictures wants exactly that much stripping and none of the rest of this. Two copies of the same short line is the arrangement where somebody meets a third kind of mark, adds it to the copy in front of them, and never learns of the other.";
  let text = bible_gloss_brackets_dropped(gloss);
  text = text.replaceAll(/[’']s\b/g, " ");
  text = text.replaceAll(/\s+/g, " ");
  text = text.trim();
  let leading =
    /^(of|to|in|by|for|with|from|on|at|as|into|through|a|an|the|and|And)\s+/;
  let stripping = true;
  while (stripping) {
    let shortened = text.replace(leading, "");
    stripping = not_equal(shortened, text) && not_equal(shortened, "");
    text = stripping ? shortened : text;
  }
  return text;
}
