import { arguments_assert } from "./arguments_assert.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_song_mark(take) {
  arguments_assert(arguments, 1);
  ("$plain take");
  ("Which of a passage's songs this one is, said the way it is written into the file name somebody downloads.");
  ("★ EVERY SONG OF A PASSAGE IS MARKED, INCLUDING THE FIRST, BECAUSE THEY ARE ALL SONGS AND NOT ONE SONG WITH SPARES. A passage sung several times is several songs on purpose. On this disk the first one is deliberately left unmarked, and that rule has a reason that does not travel - it is there so the documents whose times were corrected by hand keep the address they already have. A box nobody has uploaded yet holds no corrected document and no address worth keeping, so the reason is absent and only its cost is left: an unmarked file reads as the real one and marked files read as leftovers, which is the opposite of what is being given away.");
  ("★ THE NUMBER IS PADDED BECAUSE A BARE LISTING IS SORTED AS WORDS AND NEVER AS NUMBERS. Unpadded, a tenth song sorts between the first and the second, and the places this name is read - a download page, an unzipped folder, the screen of a music player - all sort as words and none of them can be told otherwise afterwards.");
  ("★ THE NUMBER IS THE ONE THE RECORDINGS ALREADY CARRY, SO THE FIRST SONG IS TAKE ZERO AND NOT TAKE ONE. Counting from one would read better to a person and would be wrong in the way that is hardest to see: the published name would no longer be the number the timing documents and the marks on this disk are keyed by, so anybody joining a downloaded song back to the repo that made it would be one out, quietly, on every row. A name that reads slightly oddly is cheaper than an off-by-one nobody can see from either end. Do not shift this to count from one.");
  ("Two digits rather than three. The most any one passage has been sung is a handful, so three digits would be two wasted characters in a name a player has to fit on one line; and a passage that passes ninety-nine songs is a change here, not a silent fault, because the hundredth would sort among the tens where a reader can see it.");
  let padded = number_pad_2(take);
  let mark = text_combine("take", padded);
  return mark;
}
