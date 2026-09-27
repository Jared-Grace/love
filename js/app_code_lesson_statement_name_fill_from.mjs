import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { app_code_lesson_statement_name_fill_from_step } from "./app_code_lesson_statement_name_fill_from_step.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { app_code_lesson_statement_name_swap_ladder } from "./app_code_lesson_statement_name_swap_ladder.mjs";
import { app_code_lesson_statement_name_copy } from "./app_code_lesson_statement_name_copy.mjs";
export function app_code_lesson_statement_name_fill_from() {
  arguments_assert(arguments, 0);
  ("the first lesson of the swapping ladder: a name that already holds a number is given what another name holds - let a = 3; let b = 8; a = b; writes out 8 and 8");
  ("The copying lesson gave a NEW name what another name holds. This one gives it to a name that already holds something, so the new fact is only that the old number is gone, and the two lessons after it turn on exactly that.");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let name_c = app_code_lesson_statement_name_third();
  let step = app_code_lesson_statement_name_fill_from_step();
  let middle = property_get(step, "middle");
  let line = list_first(middle);
  let copied = js_code_let_statement(name_c, name_a);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[name_a, 3]],
    [copied],
    [name_c],
  );
  let lesson = app_code_lesson_statement_name_swap_ladder({
    words: "Filling a name from another name",
    step,
    remember_lesson: app_code_lesson_statement_name_copy,
    remember_parts: [
      "we can give a new name what another name holds (",
      copied,
      "):",
    ],
    remember_lines,
    explain: [
      [
        "A name that already holds a value can be given what another name holds too: ",
        line,
      ],
      [
        "",
        name_a,
        " now holds what ",
        name_b,
        " holds, and ",
        name_b,
        " keeps it",
      ],
      ["What ", name_a, " held before is gone:"],
    ],
  });
  return lesson;
}
