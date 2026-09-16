import { app_code_line_part_is } from "./app_code_line_part_is.mjs";
import { or } from "./or.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_line_operators_carried_is } from "./app_code_line_operators_carried_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
export function app_code_exercise_solving_is(exercise) {
  arguments_assert(arguments, 1);
  ("Whether one exercise asks a learner to work a line out, rather than to match one written form of the same thing with another.");
  ("A lesson that teaches what a sign stands for shows both forms and asks which goes with which - 3 ** 5 beside 3 * 3 * 3 * 3 * 3. Neither side is ever valued, so the five threes cost a learner nothing like five threes to add. Pricing that line by the signs on it made two such lessons the two most out-of-place lessons in the whole course, which is not what they are.");
  ("Read off the exercise rather than declared, because the mark is already there: an exercise that asks for a value has a value on one side of it, and a matching exercise has an operator on both. So a lesson need say nothing about itself for this to be right, and a new one cannot forget to.");
  ("A line that does not read as code, or reads as one with no value written on it, counts as not carrying operators, so the exercise holding it is treated as solving. That is the cautious way round: an exercise wrongly called solving is priced as it always was, while one wrongly called matching would go unpriced.");
  let question = property_get(exercise, "question");
  let answer = property_get(exercise, "answer");
  let question_carried = app_code_line_operators_carried_is(question);
  let answer_carried = app_code_line_operators_carried_is(answer);
  let both_carried = and(question_carried, answer_carried);
  ("a lesson asking which part is worked out first answers with a part of the line it showed, and that is working out. Only a rewriting of the whole of it is a match.");
  let answer_inside = app_code_line_part_is(question, answer);
  let question_inside = app_code_line_part_is(answer, question);
  let part_is = or(answer_inside, question_inside);
  let rewritten_is = not(part_is);
  let matched_is = and(both_carried, rewritten_is);
  let solving_is = not(matched_is);
  return solving_is;
}
