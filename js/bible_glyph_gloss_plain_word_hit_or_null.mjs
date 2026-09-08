import { arguments_assert } from "./arguments_assert.mjs";
import { regex_letters_not } from "./regex_letters_not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function bible_glyph_gloss_plain_word_hit_or_null(glosses, plain) {
  arguments_assert(arguments, 2);
  ("$plain glosses");
  ("the English meanings the interlinear gives for the original words that were seated on one picture in one verse. They are read as text and nothing runs on their behalf.");
  ("$plain plain");
  ("the undrawn words of the authored verse, already reduced to letters and lower case.");
  ("Whether any plain word of a verse looks like the English meaning of an original word that was seated on a picture and not drawn - answering with the pair that matched so a person can see the match and disagree with it, or nothing when the meaning is not in the sentence at all.");
  ("IT MATCHES ON A SHORTENED STEM BECAUSE ENGLISH INFLECTS AND A GLOSS DOES NOT. The interlinear says do and the sentence says doing, it says son and the sentence says sons. Cutting the last two letters off the gloss and asking whether a plain word starts that way catches those without a dictionary.");
  ("IT IGNORES PIECES SHORTER THAN THREE LETTERS, because a gloss like son of arrives as several words and the short ones are the joining words every sentence is full of, so keeping them would match everything and the answer would always be yes.");
  ("IT ANSWERS THE PAIR RATHER THAN TRUE, because a stem match is a guess about English and the person reading the repair list is the one who can tell a real one from an accident. Handing back only a yes would hide the guess inside a number.");
  let letters = regex_letters_not();
  for (let gloss of glosses) {
    let lowered = text_lower_to(gloss);
    let pieces = lowered.split(letters);
    for (let piece of pieces) {
      let short = less_than(piece.length, 3);
      if (short) {
        continue;
      }
      let keep = piece.length;
      let long = less_than(4, keep);
      if (long) {
        keep = subtract(keep, 2);
      }
      let stem = piece.slice(0, keep);
      for (let word of plain) {
        let starts = word.startsWith(stem);
        if (not(starts)) {
          continue;
        }
        let r = {
          gloss_piece: piece,
          plain_word: word,
        };
        return r;
      }
    }
  }
  return null;
}
