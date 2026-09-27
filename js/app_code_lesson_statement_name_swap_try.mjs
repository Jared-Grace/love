import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_fill_from_step } from "./app_code_lesson_statement_name_fill_from_step.mjs";
import { app_code_lesson_statement_name_swap_try_step } from "./app_code_lesson_statement_name_swap_try_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { app_code_lesson_statement_name_swap_ladder } from "./app_code_lesson_statement_name_swap_ladder.mjs";
import { app_code_lesson_statement_name_fill_from } from "./app_code_lesson_statement_name_fill_from.mjs";
export function app_code_lesson_statement_name_swap_try() {
  arguments_assert(arguments, 0);
  ("the second lesson of the swapping ladder: the swap a learner tries first - a = b; b = a; - which leaves both names holding the same number");
  ("It is taught as a trap on purpose. The reason swapping needs a third name is that this program loses a number, and a learner who has predicted 8 and 8 here knows why the next lesson saves one first.");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let before = app_code_lesson_statement_name_fill_from_step();
  let step = app_code_lesson_statement_name_swap_try_step();
  let middle_before = property_get(before, "middle");
  let line_before = list_first(middle_before);
  let middle = property_get(step, "middle");
  let line = list_last(middle);
  let logged = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 3],
      [name_b, 8],
    ],
    middle_before,
    logged,
  );
  let lesson = app_code_lesson_statement_name_swap_ladder({
    words: "Trying to swap two names",
    step,
    remember_lesson: app_code_lesson_statement_name_fill_from,
    remember_parts: [
      "",
      line_before,
      " gives ",
      name_a,
      " what ",
      name_b,
      " holds:",
    ],
    remember_lines,
    explain: [
      ["To swap ", name_a, " and ", name_b, ", we might try adding ", line],
      [
        "But ",
        line,
        " gives ",
        name_b,
        " what ",
        name_a,
        " holds now, and that is already what ",
        name_b,
        " holds",
      ],
      ["Both names end up holding the same number:"],
    ],
  });
  return lesson;
}
