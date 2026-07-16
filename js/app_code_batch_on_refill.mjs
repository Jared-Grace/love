import { app_code_batch_avoid_repeat } from "./app_code_batch_avoid_repeat.mjs";
export function app_code_batch_on_refill(shuffle) {
  "an on-refill for the batch iterator that FIRST applies the given shuffle (list_shuffle for quizzes, noop for examples) and THEN dedups the seam — rotates the first item to the end if it repeats the previous refill's last question — so no back-to-back repeat survives the shuffle; holds the last question across refills";
  let last_question = null;
  function on_refill(items) {
    shuffle(items);
    last_question = app_code_batch_avoid_repeat(items, last_question);
  }
  return on_refill;
}
