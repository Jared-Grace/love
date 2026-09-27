import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_temp } from "./app_code_lesson_statement_name_temp.mjs";
import { app_code_lesson_statement_name_swap_try_step } from "./app_code_lesson_statement_name_swap_try_step.mjs";
import { app_code_lesson_statement_name_temp_keep_step } from "./app_code_lesson_statement_name_temp_keep_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { app_code_lesson_statement_name_swap_ladder } from "./app_code_lesson_statement_name_swap_ladder.mjs";
import { app_code_lesson_statement_name_swap_try } from "./app_code_lesson_statement_name_swap_try.mjs";
export function app_code_lesson_statement_name_temp_keep() {
  arguments_assert(arguments, 0);
  ("the third lesson of the swapping ladder: let temp = a; before a = b; keeps what a held - temp and a are written out");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let temp = app_code_lesson_statement_name_temp();
  let before = app_code_lesson_statement_name_swap_try_step();
  let step = app_code_lesson_statement_name_temp_keep_step();
  let middle = property_get(step, "middle");
  let line_keep = list_first(middle);
  let line_fill = list_second(middle);
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
    words: "Keeping a value before it is lost",
    step,
    remember_lesson: app_code_lesson_statement_name_swap_try,
    remember_parts: [
      "trying to swap ",
      name_a,
      " and ",
      name_b,
      " lost what ",
      name_a,
      " held:",
    ],
    remember_lines,
    explain: [
      [
        "Before ",
        name_a,
        " is changed, we can copy what it holds into a new name: ",
        line_keep,
      ],
      [
        "",
        temp,
        " is short for temporary: it holds the value only for a moment",
      ],
      ["After ", line_fill, ", ", temp, " still holds what ", name_a, " held:"],
    ],
  });
  return lesson;
}
