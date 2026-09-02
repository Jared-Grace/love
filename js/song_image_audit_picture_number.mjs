import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_integer } from "./html_input_integer.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_caption_font_size } from "./app_shared_caption_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
export function song_image_audit_picture_number(strip, jump) {
  "the attempt's own number shown in a box that can be typed into, so a picture can be reached by naming it instead of by pressing an arrow until it arrives";
  "IT IS THE NUMBER ALREADY ON DISPLAY MADE EDITABLE, and not a second control beside it. The strip is in a column two hundred and sixty pixels wide and every press-target added there takes room from the arrows; a box that both says where you are and takes you somewhere costs nothing that was not already spent.";
  "TYPING IS ENOUGH AND NO PRESS IS ASKED FOR, because a couplet with eighty attempts is looked at by trying numbers rather than by knowing one. Every keystroke that names a drawing that exists shows it, and every one that does not is left alone on the screen so the next digit can finish the number.";
  arguments_assert(arguments, 2);
  let number = html_input_integer(strip);
  html_style_set(number, "width", "52px");
  let small = app_shared_caption_font_size();
  html_style_font_size(number, small);
  function typed() {
    let text = html_value_get(number);
    jump(text);
  }
  html_on_input(number, typed);
  return number;
}
