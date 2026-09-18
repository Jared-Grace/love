import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_colors_light } from "./app_code_note_name_colors_light.mjs";
import { app_code_note_name_color_in_or_null } from "./app_code_note_name_color_in_or_null.mjs";
export function app_code_note_name_color_light_or_null(names, name) {
  arguments_assert(arguments, 2);
  ("the colour a name is written in on a pale background - the letter on a cup - and nothing when the name is not one the lesson listed");
  ("The twin of the one next door that answers for a black chip. Both are one line, and both exist so that no screen ever picks a list of colours for itself: a screen says which background it is drawing on, and the answer to which name is which is given in one place for both.");
  let colors = app_code_note_name_colors_light();
  let color = app_code_note_name_color_in_or_null(colors, names, name);
  return color;
}
