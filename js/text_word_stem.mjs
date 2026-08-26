import { text_word_end_e_dropped } from "./text_word_end_e_dropped.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_word_stem(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("One English word with a common ending folded off it, so that two sayings using the same word in different grammar meet as one word rather than as two.");
  ("COUNTING WHOLE WORDS ASKS WHETHER TWO SAYINGS USE THE SAME WORD, NOT WHETHER THEY SAY THE SAME THING. A sung line asking God to wash all my sin, and a verse saying he washed us from our sins, are the same claim in the same words; counted whole they share nothing at all - not one word in a row - because wash is not washed and sin is not sins. Two of the twenty two translations chosen for the music page were found only once the endings came off.");
  ("IT IS A CRUDE FOLDING RATHER THAN A DICTIONARY, WHICH IS THE RIGHT SIZE FOR THE QUESTION. Only the endings English inflects with are taken - the plural, the past, the participle, and the two the older bibles carry - and a word is cut only when three letters or more would be left, so that as and his and was are not filed down to nothing. It will fold two unrelated words together now and then, and it will miss an irregular one entirely. Both cost a comparison a little accuracy, and neither can put the wrong scripture in front of anybody, because nothing resting on it decides more than which of several correct translations is quoted.");
  ("IT IS SEPARATE FROM THE COUNTING THAT LEAVES ENDINGS ON, AND HAS TO STAY SEPARATE. That counting is what catches a bible numbering the psalms one behind the rest: the offending translation shares not one word in a row with any other, and the nearest innocent translation shares exactly one. Folding endings raises every score, so folding them there could lift the offending translation off its zero and leave the check green and blind. Two callers, two functions, and the gap between them is a single word wide.");
  ("THE ENDINGS ARE TRIED IN THIS ORDER AND THE FIRST ONE THAT FITS IS THE ONE TAKEN. Longer endings come before the shorter ones they end with, so that resting is cut back to rest rather than to restin, and an ending that fits a word too short to survive it is passed over rather than ending the search.");
  let endings = ["eth", "est", "ing", "ies", "ed", "es", "s"];
  for (let ending of endings) {
    let carries = text_ends_with(word, ending);
    if (carries) {
      let ending_size = text_size(ending);
      let left = text_size(word);
      let kept_size = subtract(left, ending_size);
      let enough = greater_than(kept_size, 2);
      if (enough) {
        let kept = text_slice(word, 0, kept_size);
        let plural = equal(ending, "ies");
        let on_true = text_combine(kept, "y");
        let stemmed = ternary(plural, on_true, kept);
        let word2 = text_word_end_e_dropped(stemmed);
        return word2;
      }
    }
  }
  let word3 = text_word_end_e_dropped(word);
  return word3;
}
