import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_remember_from_lesson_names } from "./app_code_remember_from_lesson_names.mjs";
export function app_code_remember_from_lesson(
  parent,
  context,
  lesson_fn,
  parts,
) {
  arguments_assert(arguments, 4);
  ("a reminder of something an earlier lesson taught, for a screen whose lesson hands out no coloured names: Remember, from lesson N, and then the parts, which alternate plain writing and code the same way every other line on a lesson screen does");
  ("THE WHOLE REMINDER IS THE TWIN'S, AND THIS ADDS ONLY THE EMPTY LIST OF NAMES. Which lesson is pointed at, whether it is named by its number or as the previous one, the button, the alternating parts - all of it is written once, next door. Copied here instead, the two would have said the same thing about lesson numbering in two places, and the numbering is the part of this that has already been wrong once and been fixed.");
  ("Most screens are this one. A reminder on a lesson about arithmetic or about what a name may be spelled with has no cups and no coloured names to carry in, and a screen with no names to lend is not a screen missing something - the empty list is the right answer and the ordinary code colour is what its code pieces should be.");
  ("A screen that does hand out names calls the twin by its own name rather than being switched over from here. That is one word at the call and it is visible in the lesson's own text, which is where whoever added the names is already reading.");
  let names = [];
  let div = app_code_remember_from_lesson_names(
    parent,
    context,
    lesson_fn,
    parts,
    names,
  );
  return div;
}
