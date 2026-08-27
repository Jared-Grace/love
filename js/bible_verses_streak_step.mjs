import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
export function bible_verses_streak_step(streak, verse_number) {
  "$plain streak";
  "$plain verse_number";
  "One more verse added to a run that is still going, remembering which verse the run started at if this is the first of it.";
  "★ THE FIRST VERSE IS TAKEN ON THE WAY IN, NOT WORKED OUT AT THE END. A run knows its own length by counting, but nothing in a length says where it began, and a caller that subtracts the length from the last verse gets the wrong answer wherever a chapter's numbering skips.";
  arguments_assert(arguments, 2);
  let started = equal(streak.run, 0);
  if (started) {
    streak.first = verse_number;
  }
  streak.run = add(streak.run, 1);
}
