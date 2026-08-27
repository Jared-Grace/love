import { arguments_assert } from "./arguments_assert.mjs";
export function bible_verses_streak_new() {
  "A fresh count of verses running one after another, holding nothing yet, ready to be stepped and broken as a chapter is read.";
  "★ IT IS MADE RATHER THAN WRITTEN OUT SO THAT TWO COUNTS CANNOT START DIFFERENTLY. A report that watches for two kinds of run at once needs two of these, and two hand-written copies of the same four fields are two chances for one of them to begin with a longest length that is not zero.";
  arguments_assert(arguments, 0);
  let streak = {
    run: 0,
    first: 0,
    longest: {
      chapter_code: "",
      length: 0,
      first_verse: 0,
    },
    runs: [],
  };
  return streak;
}
