import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_operators_written } from "./app_code_lesson_text_operators_written.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_text_line_code_is } from "./app_code_lesson_text_line_code_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_text_line_operator_mix_or_null(text) {
  arguments_assert(arguments, 1);
  ("whether a line of code with more than one operator in it writes the SAME operator throughout or MIXES two of them. Nothing comes back for a piece that is not such a line.");
  ("A repeated operator and a mixed pair are two different things to work out. 2 === 2 === 2 is one rule applied twice; 2 !== 2 === 2 asks the learner to hold two rules at once and to know which is reached first. A lesson that only ever showed the first and then asks about the second has added a thing it never taught, and no other mark sees it: both lines are flat, both compare numbers to numbers, and neither puts a value at either end.");
  ("Two operators is what makes the question exist at all, the same threshold the brackets are read at and for the same reason. One operator is neither repeated nor mixed with anything.");
  ("Which operators they are is not the question here - that is what the coarser check over symbols asks, and it asks it of the whole lesson rather than of one line. This asks only whether the line writes one of them or several.");
  let written = app_code_lesson_text_operators_written(text);
  let count = list_size(written);
  let several = greater_than(count, 1);
  let one_only = not(several);
  if (one_only) {
    return null;
  }
  let code_is = app_code_lesson_text_line_code_is(text);
  let sentence = not(code_is);
  if (sentence) {
    return null;
  }
  let unique = list_unique(written);
  let kinds = list_size(unique);
  let same = equal(kinds, 1);
  let mix = ternary(same, "operators_same", "operators_mixed");
  return mix;
}
