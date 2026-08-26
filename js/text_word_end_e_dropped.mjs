import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_slice } from "./text_slice.mjs";
export function text_word_end_e_dropped(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("One English word with a final e taken off it, so that a word carrying a silent e meets the same word once an ending has eaten that e.");
  ("THIS EXISTS BECAUSE STRIPPING ED TAKES THE E WITH IT AND NOTHING PUTS IT BACK. Loved folded is lov, while love left alone is still love, so a line singing love could never meet a verse saying loved - the two words the ear hears as one were filed to two different shapes. Taking the final e off both sides is what makes them meet, and it is the cheaper repair: putting the e back on would need to know when it belonged there, which is a dictionary, while taking it off both sides needs to know nothing.");
  ("IT IS APPLIED TO EVERY WORD AND NOT ONLY TO THE ONES AN ENDING WAS CUT FROM. A rule that fired only after a cut would leave love as love and loved as lov, which is the very gap it was written to close; both sides have to lose the e or neither meets.");
  ("A WORD IS ONLY CUT WHERE THREE LETTERS OR MORE WOULD BE LEFT, the same floor the endings use. See and the and are are worth more whole than filed down to two letters, and a two letter stem collides with far too much.");
  ("IT WILL FOLD TWO UNRELATED WORDS TOGETHER NOW AND THEN - hop and hope come out alike - which is the same trade the crude folding next door already makes. Nothing resting on either decides more than which of several correct translations a page quotes, so a rare wrong join costs a comparison a little accuracy and can put no wrong scripture in front of anybody.");
  let carries = text_ends_with(word, "e");
  if (carries) {
    let left = text_size(word);
    let kept_size = subtract(left, 1);
    let enough = greater_than(kept_size, 2);
    if (enough) {
      let kept = text_slice(word, 0, kept_size);
      return kept;
    }
  }
  return word;
}
