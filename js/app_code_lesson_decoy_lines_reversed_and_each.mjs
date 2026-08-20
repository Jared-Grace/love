import { app_code_lesson_decoy_lines_each } from "./app_code_lesson_decoy_lines_each.mjs";
import { app_code_lesson_decoy_lines_reversed } from "./app_code_lesson_decoy_lines_reversed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_decoy_lines_reversed_and_each(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  (
    "the tempting wrong answers for a screen teaching that two lines write out two things in the order they are written: the answer with its lines the other way round, and each line on its own"
  );
  (
    "Two mistakes, and either one alone leaves the screen passable without making it. Reversed alone forces the order to be read but not the second line to be worked out, because it is the only other option and its first line differs from the right one's. Each line alone forces both lines to be worked out but says nothing about which comes first. Together they close both: every wrong answer on the buttons is right about part of the program and wrong about the rest."
  );
  (
    "The reversed one is put first, because it is the one wrong answer that exists only for this screen; where there are more mistakes than buttons the buttons should hold the ones the screen is about."
  );
  let reversed = app_code_lesson_decoy_lines_reversed(question, answer);
  let each_line = app_code_lesson_decoy_lines_each(question, answer);
  let decoys = list_concat(reversed, each_line);
  return decoys;
}
