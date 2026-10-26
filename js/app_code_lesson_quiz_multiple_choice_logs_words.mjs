import { not } from "./not.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_code_lesson_quiz_multiple_choice_logs_words(
  quiz_question_text,
  quiz_answer_text,
  candidate_text,
) {
  "Whether a wrong program offered for 'what code produces this logged output?' logs every word the output shows, as the right program does - asked for by the human 2026-10-26: a choice that never logs one of the words on the screen gives itself away, so the learner picks by scanning for a word rather than by reading what the program does.";
  "Only a word the right program logs as written, console.log(\"word\"), is asked of the others: a value logged by name, console.log(n), is not a word the choices can be compared on. And so a quiz of the other way round, which shows a program and asks for its output, asks nothing at all - no line of a program is a word its output logs - and every choice there passes, as before.";
  "Measured 2026-10-26 over the course: the decoys a lesson makes for itself always kept the words, 88 of 88, while the programs borrowed from its other questions missed one 236 times in 268.";
  let words = text_split_newline(quiz_question_text);
  for (let word of words) {
    let logged = text_combine_multiple(['console.log("', word, '")']);
    let asked = text_includes(quiz_answer_text, logged);
    if (asked && not(text_includes(candidate_text, logged))) {
      return false;
    }
  }
  return true;
}
