import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_review_since_lesson_reached_paths } from "./app_code_lessons_review_since_lesson_reached_paths.mjs";
import { not } from "./not.mjs";
export async function app_code_lessons_review_since_lessons_of_path(
  names_after,
) {
  "Every file the lessons reach, each one answered with the lessons that reach it.";
  "WHICH LESSONS REACH A FILE IS WHAT TELLS A LESSON'S OWN WRITING APART FROM THE MACHINERY every lesson is built on, and it is counted rather than read off a list of words. A list of words goes stale the moment somebody adds a helper, and goes stale silently, which is the one way a reading like this fails without saying so.";
  "A FILE ONLY ONE LESSON REACHES IS THAT LESSON'S WRITING. A file several lessons reach is shared, and the caller reports it once with how many lessons stand on it rather than turning it into a complaint against each of them - the first run of this put all ninety-seven old lessons on the review list because the quiz machinery had been edited, which is a list nobody could have read.";
  "THE IMPORTS ALREADY LOOKED UP ARE CARRIED FROM ONE LESSON TO THE NEXT, because the lessons stand on each other and the same file is otherwise read once per lesson that reaches it.";
  arguments_assert(arguments, 1);
  let imports_remembered = {};
  let lessons_of_path = {};
  for (let lesson_name of names_after) {
    let reached_paths =
      await app_code_lessons_review_since_lesson_reached_paths(
        lesson_name,
        imports_remembered,
      );
    for (let reached_path of reached_paths) {
      let holders = lessons_of_path[reached_path];
      if (not(holders)) {
        holders = [];
        lessons_of_path[reached_path] = holders;
      }
      holders.push(lesson_name);
    }
  }
  return lessons_of_path;
}
