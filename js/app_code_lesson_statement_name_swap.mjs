import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_temp } from "./app_code_lesson_statement_name_temp.mjs";
import { app_code_lesson_statement_name_temp_keep_step } from "./app_code_lesson_statement_name_temp_keep_step.mjs";
import { app_code_lesson_statement_name_swap_step } from "./app_code_lesson_statement_name_swap_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { app_code_lesson_statement_name_swap_ladder } from "./app_code_lesson_statement_name_swap_ladder.mjs";
import { app_code_lesson_statement_name_temp_keep } from "./app_code_lesson_statement_name_temp_keep.mjs";
export function app_code_lesson_statement_name_swap() {
  arguments_assert(arguments, 0);
  ("the last lesson of the swapping ladder: let temp = a; a = b; b = temp; swaps a and b - both are written out");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let temp = app_code_lesson_statement_name_temp();
  let before = app_code_lesson_statement_name_temp_keep_step();
  let step = app_code_lesson_statement_name_swap_step();
  let middle = property_get(step, "middle");
  let line = list_last(middle);
  let middle2 = property_get(before, "middle");
  let logged = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 3],
      [name_b, 8],
    ],
    middle2,
    logged,
  );
  let lesson = app_code_lesson_statement_name_swap_ladder({
    words: "Swapping two names",
    step,
    remember_lesson: app_code_lesson_statement_name_temp_keep,
    remember_parts: ["", temp, " kept what ", name_a, " held:"],
    remember_lines,
    explain: [
      [
        "Now ",
        name_b,
        " can be given what ",
        name_a,
        " held, from ",
        temp,
        ": ",
        line,
      ],
      ["", name_a, " and ", name_b, " have swapped:"],
    ],
  });
  return lesson;
}
