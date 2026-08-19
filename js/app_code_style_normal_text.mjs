import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_style_normal_text(container, answer) {
  (
    "a value the machine wrote out, drawn in the look this app gives a written-out value, and keeping the lines it was handed"
  );
  (
    "A program with two lines that write out has an output of two lines, and left to itself a browser folds every run of blank space into one space - a newline is blank space, so the second line would arrive beside the first with nothing to say a break was lost. The break is kept and a wrap is still allowed, so a long line still folds inside a narrow phone instead of pushing the page sideways."
  );
  (
    "Every value this app writes out today stands on one line and holds no run of blank space, so keeping the breaks changes nothing that is already drawn; it is here so that the first value standing on two lines is drawn right by the screen that shows it rather than by the lesson that needed it."
  );
  let answer_div = html_div_text(container, answer);
  app_code_style_normal(answer_div);
  html_style_white_space(answer_div, "pre-wrap");
}
