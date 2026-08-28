import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { app_code_lesson_text_line_bracket_shape_or_null } from "./app_code_lesson_text_line_bracket_shape_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_text_line_operator_mix_or_null } from "./app_code_lesson_text_line_operator_mix_or_null.mjs";
import { app_code_lesson_text_line_value_sides } from "./app_code_lesson_text_line_value_sides.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_code_lesson_text_line_operand_kinds } from "./app_code_lesson_text_line_operand_kinds.mjs";
export function app_code_lesson_text_line_shapes(text) {
  arguments_assert(arguments, 1);
  ("every way a piece of text is SHAPED as a line of code, named. Whether it is bracketed or flat, whether it writes one operator over and over or mixes two, which end a true or a false sits at, and what kinds of thing stand either side of the operators.");
  ("Four readings of the one line rather than one, because they are independent, and each was kept only once a pair of lines was found that the others call identical. false !== (3 === 3) against (3 === 3) !== false for the side. 3 === 5 against divisor === 0 for the kinds. 2 === 2 === 2 against 2 !== 2 === 2 for the mix - both flat, both numbers, no value at either end. A single name covering the grains at once would have to spell every pairing of them and would then match nothing when a new grain was added. Named apart, a fifth grain is one more reading added here and nothing else changed anywhere.");
  ("Each reading keeps its own idea of how much line it needs. Brackets and the mix say nothing until there are two operators to order; a side and a kind are already there with one. A threshold shared out of tidiness would have been a claim that the grains are the same kind of thing, which they are not.");
  ("The line is trimmed once here rather than in each reading, because they ask about its ends and a trailing space would put a value at neither.");
  let trimmed = text_trim(text);
  let found = [];
  let bracket_shape = app_code_lesson_text_line_bracket_shape_or_null(trimmed);
  let some = null_not_is(bracket_shape);
  if (some) {
    list_add(found, bracket_shape);
  }
  let mix = app_code_lesson_text_line_operator_mix_or_null(trimmed);
  let some2 = null_not_is(mix);
  if (some2) {
    list_add(found, mix);
  }
  let sides = app_code_lesson_text_line_value_sides(trimmed);
  list_add_multiple(found, sides);
  let kinds = app_code_lesson_text_line_operand_kinds(trimmed);
  list_add_multiple(found, kinds);
  return found;
}
