import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function app_code_lesson_decoy_lines_each(question, answer) {
  arguments_assert(arguments, 2);
  (
    "the tempting wrong answers for a program that writes out more than one line: each of those lines on its own, as if only that one line had been written out"
  );
  (
    "The mistake a screen that has just said two lines give two answers is built to catch is a learner working out one of them and stopping. Offering each line alone puts that stopping place on the buttons, and it is the only wrong answer that shares a first line with the right one - so the question can no longer be settled by working out the first line and looking for the option that starts with it."
  );
  (
    "The right answer is among these when it stands on a single line, and is dropped where every wrong answer is dropped: a decoy already among the ones seen is not added twice, and the right answer is the first thing seen."
  );
  (
    "The question is not looked at. What makes these decoys is a property of the answer alone."
  );
  let lines = text_split_newline(answer);
  return lines;
}
