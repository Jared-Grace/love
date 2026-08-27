import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function bible_verses_streak_break(streak, chapter_code) {
  "$plain streak";
  "$plain chapter_code";
  "The end of a run of verses: the run is kept if it beat the longest one seen, listed if it went past two, and the count is set back to nothing.";
  "★ BREAKING IS WHAT RECORDS, WHICH IS WHY IT MUST ALSO BE CALLED AT THE END OF A CHAPTER. A run that is still going when the verses stop was never broken, so a caller that only breaks on a stopping mark loses the one run most likely to be the longest - the one that ran to the end.";
  "★ A RUN OF ONE OR TWO IS COUNTED IN THE LONGEST AND LEFT OFF THE LIST. A pair of verses that carry a sentence between them is ordinary english and listing every pair would bury the runs worth reading, but a bible whose longest run is two is a real and reportable answer, so the two are not the same test.";
  arguments_assert(arguments, 2);
  let beat = greater_than(streak.run, streak.longest.length);
  if (beat) {
    streak.longest = {
      chapter_code,
      length: streak.run,
      first_verse: streak.first,
    };
  }
  let listed = greater_than(streak.run, 2);
  if (listed) {
    list_add(streak.runs, {
      chapter_code,
      first_verse: streak.first,
      length: streak.run,
    });
  }
  streak.run = 0;
}
