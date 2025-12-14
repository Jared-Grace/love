import { invoke_multiple_shuffle } from "../../../love/public/src/invoke_multiple_shuffle.mjs";
export function invoke_multiple_shuffle_2(correct, wrong) {
  let choices = [correct, wrong];
  invoke_multiple_shuffle(choices);
}
