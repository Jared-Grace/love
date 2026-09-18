import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { app_code_note_name_color_in_or_null } from "./app_code_note_name_color_in_or_null.mjs";
export function app_code_note_name_color_or_null(names, name) {
  arguments_assert(arguments, 2);
  ("the colour a name is written in inside a black code chip, or nothing when the name is not one the lesson listed");
  ("THE ONE PLACE THE QUESTION IS ANSWERED FOR A DARK BACKGROUND, because it is asked from both sides of the same picture: by the note, which colours the marked name it is holding, and by the code, which colours the same name where the program uses it. Asked in two places, the two could answer differently, and the pairing the colour exists to show would be a lie on the screen rather than merely missing.");
  ("Which name gets which is worked out next door and shared with the pale-background twin, so a change to the order cannot reach one surface and miss the other. All that is chosen here is the list of colours, which is the only thing the background actually changes.");
  let colors = app_code_note_name_colors();
  let color = app_code_note_name_color_in_or_null(colors, names, name);
  return color;
}
