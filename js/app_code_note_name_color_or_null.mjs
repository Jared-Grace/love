import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { null_get } from "./null_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_color_or_null(names, name) {
  arguments_assert(arguments, 2);
  ("the colour this program lends to this name, or nothing when the name is not one the notes marked or the list of colours has run out");
  ("THE ONE PLACE THE QUESTION IS ANSWERED, because it is asked from both sides of the same picture: by the note, which colours the marked name it is holding, and by the code, which colours the same name where the program uses it. Asked in two places, the two could answer differently, and the pairing the colour exists to show would be a lie on the screen rather than merely missing.");
  ("A name past the end of the colours is given nothing rather than sent back to the start of the list. Starting again would paint two different names the same, which says they are the same name - and saying that falsely is worse than saying nothing at all.");
  ("Whether the name was marked at all is asked before where it stands, because the asking of where throws when the answer is nowhere. Most of what a program says was never marked - console and log and every keyword - so nowhere is the ordinary answer here and not a fault.");
  if (list_includes_not(names, name)) {
    let nothing = null_get();
    return nothing;
  }
  let index = list_index_of(names, name);
  let colors = app_code_note_name_colors();
  let count = list_size(colors);
  if (less_than(index, count)) {
    let color = colors[index];
    return color;
  }
  let nothing2 = null_get();
  return nothing2;
}
