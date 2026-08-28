import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { app_code_lesson_text_line_bracket_shape_or_null } from "./app_code_lesson_text_line_bracket_shape_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_text_line_value_sides } from "./app_code_lesson_text_line_value_sides.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_code_lesson_text_line_shapes(text) {
  arguments_assert(arguments, 1);
  ("every way a piece of text is SHAPED as a line of code, named. Whether it is bracketed or flat, and which end a true or a false sits at.");
  ("Two readings of the one line rather than one, because they are independent: false !== (3 === 3) and (3 === 3) !== false are both bracketed and differ only in the side, and a single name covering both grains at once would have to spell every pairing of them and would then match nothing when a new grain was added. Named apart, a third grain is one more reading added here and nothing else changed anywhere.");
  ("The line is trimmed once here rather than in each reading, because both of them ask about its ends and a trailing space would put a value at neither.");
  let trimmed = text_trim(text);
  let found = [];
  let bracket_shape = app_code_lesson_text_line_bracket_shape_or_null(trimmed);
  let some = null_not_is(bracket_shape);
  if (some) {
    list_add(found, bracket_shape);
  }
  let sides = app_code_lesson_text_line_value_sides(trimmed);
  list_add_multiple(found, sides);
  return found;
}
