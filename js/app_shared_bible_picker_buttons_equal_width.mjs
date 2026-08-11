import { app_shared_bible_picker_button_size } from "./app_shared_bible_picker_button_size.mjs";
import { html_style_min_width } from "./html_style_min_width.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_max } from "./list_max.mjs";
import { text_size } from "./text_size.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_picker_buttons_equal_width(
  buttons,
  items,
  item_to_button_text,
) {
  "give every button in a number picker the width of the widest number in the set, so a one digit verse sits in the same size tile as a three digit one and the grid reads as an even field of choices rather than a ragged one";
  "a floor rather than a fixed width, because erring wide leaves every button resting on the floor and so equal, while erring narrow lets the widest button grow past the rest and keeps the very unevenness this removes";
  "the book picker deliberately does not call this: its labels are names, so a floor cut to the longest of them would stretch every short name to the width of the longest and waste the row";
  function label_size(item) {
    let label = item_to_button_text(item);
    let text = text_combine_multiple([label]);
    let label_width = text_size(text);
    return label_width;
  }
  let sizes = list_map(items, label_size);
  let widest = list_max(sizes);
  let count = list_size(buttons);
  let size = app_shared_bible_picker_button_size(count);
  let pad_x = property_get(size, "pad_x");
  ("the floor has to hold the widest label plus the padding on both sides plus the button's own border, and a little over that is safe where a little under is not, so the spare tenths are deliberate");
  let width = text_combine_multiple([
    "calc(",
    widest,
    "ch + 2 * ",
    pad_x,
    " + 0.4em)",
  ]);
  function lambda(button) {
    html_style_min_width(button, width);
  }
  each(buttons, lambda);
}
