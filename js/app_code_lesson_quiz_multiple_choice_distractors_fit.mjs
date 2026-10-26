import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function app_code_lesson_quiz_multiple_choice_distractors_fit(
  distractors,
  quiz_answer_text,
) {
  "The wrong answers kept for one multiple-choice quiz, so that all the choices together are short enough to read and compare: the first one always, so there are at least two choices, and each one after only while every line on the buttons, the answer's included, stays within the limit - asked for by the human 2026-10-26, because four whole programs to choose among is a reading job rather than a question.";
  "Counted in lines, because a choice drawn as code is read line by line, and a choice of one line - a logged value, a single statement - costs one line however long it is, so every quiz whose choices are short keeps all four exactly as before.";
  "The limit is 20 lines, measured 2026-10-26 over the whole course: choices run from 1 to 13 lines, so 20 keeps four choices of up to five lines, three of six, and two from seven lines up. Not picked: a limit on the longest single choice, which would drop one long decoy but still show three; and a fixed two whenever any choice is code, which takes away choices from the short programs that read easily.";
  "Kept in the order the decoys were drawn, which is already random, so which ones survive is as random as which were drawn; and a new list is handed back rather than the one given cut down, because that one belongs to the caller.";
  let limit = 20;
  let lines_used = text_split_newline(quiz_answer_text).length;
  let kept = [];
  for (let distractor of distractors) {
    let lines = text_split_newline(distractor).length;
    let fits = less_than_equal(lines_used + lines, limit);
    if (equal(kept.length, 0) || fits) {
      kept.push(distractor);
      lines_used = lines_used + lines;
    }
  }
  return kept;
}
