import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_replace_all } from "./list_replace_all.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_lesson_solve_merged(lesson, solve) {
  arguments_assert(arguments, 2);
  ("one lesson out of an all-at-once lesson and the pressing lesson built in front of it: the pressing lesson's opening, which is the all-at-once opening with one line pressed through under it, then the all-at-once lesson's examples, with the pressing quiz asked first and the all-at-once quizzes after it");
  ("Asked for by the human 2026-11-12 for the array lessons only: can you just merge the arrays? The expression pairs stay split, as decided 2026-10-22.");
  ("Every quiz is handed the list of quizzes it belongs to, and counts the lesson finished, and moves to the next kind, by that list. So the two lists are not joined into a new one: each is filled in place with the whole joined list, and every quiz of either lesson then reads the same quizzes in the same order.");
  let solve_batch = property_get(solve, "batch");
  let lesson_batch = property_get(lesson, "batch");
  function item_merged(item) {
    let solve_items = solve_batch();
    let solve_item = list_first(solve_items);
    let solve_quizzes = property_get(solve_item, "quizzes");
    let quizzes = property_get(item, "quizzes");
    let joined = list_concat(solve_quizzes, quizzes);
    list_replace_all(solve_quizzes, joined);
    list_replace_all(quizzes, joined);
    let solve_exercises = property_get(solve_item, "exercises");
    let exercises = property_get(item, "exercises");
    let exercises_joined = list_concat(solve_exercises, exercises);
    let merged = {
      question: property_get(item, "question"),
      answer: property_get(item, "answer"),
      example: property_get(item, "example"),
      quizzes,
      exercises: exercises_joined,
    };
    return merged;
  }
  function batch() {
    let items = lesson_batch();
    let mapped = list_map(items, item_merged);
    return mapped;
  }
  let r = {
    name: property_get(lesson, "name"),
    above: property_get(solve, "above"),
    example_count: property_get(lesson, "example_count"),
    batch,
  };
  return r;
}
