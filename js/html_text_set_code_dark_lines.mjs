import { html_text_align_left } from "./html_text_align_left.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
export function html_text_set_code_dark_lines(component, text) {
  "code standing on more than one line, written into a code chip that keeps the line breaks it was handed";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with and that slot is called with three - the thing to paint, the code, and the card it sits in - by the worked example, and with two by the quiz. Its plain twin has never asserted either, so a lesson that swaps one for the other keeps working, which is the whole point of them being swappable.";
  "A chip left to itself lets the browser fold every run of blank space into a single space, and a newline is blank space, so a program written on three lines arrives as one long line with no sign that anything was lost.";
  "The breaks are kept and a wrap is still allowed, so a line too wide for a narrow phone folds inside the chip rather than pushing the whole page sideways.";
  "The lines are pulled to the left edge. A button in this app centres what is written on it, which is right for the one word or one number a button usually holds and wrong for a program: two lines of code centred are two lines that start in different places, and where a line starts is part of how code is read. A chip is left-aligned already, so saying so changes nothing there.";
  html_text_set_code_dark(component, text);
  html_style_white_space(component, "pre-wrap");
  html_text_align_left(component);
}
