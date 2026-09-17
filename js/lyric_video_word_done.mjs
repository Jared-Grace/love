import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function lyric_video_word_done(words, index) {
  arguments_assert(arguments, 2);
  ("$plain words");
  ("$plain index");
  ("The second one word of a sung line stops being lit: when the next word in its line begins, unless the singer stops for a second or more first, in which case where the word itself ends.");
  ("★ THE ALIGNER ENDS A WORD WHERE ITS LETTERS STOP MATCHING, which on a held note is well before the note is let go, so going dark at that end makes the colour flicker between words that are sung straight on. A real rest is different: nothing is being sung, so nothing is lit.");
  ("★ IT IS ONE RULE FOR THE VIDEO AND FOR THE SCREEN WHERE WORDS ARE MOVED BY HAND. A word is moved on that screen until it lights on time, and that judgment is only worth anything if the video then lights it the same way.");
  ("The last word of a line has no next word, so it is done where it ends.");
  let word = words[index];
  let next = words[add(index, 1)];
  let done = word.end;
  if (next && less_than(subtract(next.start, word.end), 1)) {
    done = next.start;
  }
  return done;
}
