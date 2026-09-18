import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { null_get } from "./null_get.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_note_name_color_or_null(names, name) {
  arguments_assert(arguments, 2);
  ("the colour this program lends to this name, or nothing when the name is not one the notes marked or the list of colours has run out");
  ("THE ONE PLACE THE QUESTION IS ANSWERED, because it is asked from both sides of the same picture: by the note, which colours the marked name it is holding, and by the code, which colours the same name where the program uses it. Asked in two places, the two could answer differently, and the pairing the colour exists to show would be a lie on the screen rather than merely missing.");
  ("A name past the end of the colours is given nothing rather than sent back to the start of the list. Starting again would paint two different names the same, which says they are the same name - and saying that falsely is worse than saying nothing at all.");
  let index = list_index_of(names, name);
  if (less_than(index, 0)) {
    let nothing = null_get();
    return nothing;
  }
  let colors = app_code_note_name_colors();
  let count = list_size(colors);
  if (less_than(index, count)) {
    let color = colors[index];
    return color;
  }
  let nothing2 = null_get();
  return nothing2;
}
