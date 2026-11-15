import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_unavailable_box(parent, text) {
  arguments_assert(arguments, 2);
  ('A line saying a choice is not open, drawn the size of the buttons beside it so the list keeps one rhythm, but in grey on a pale ground so it never reads as something to press (human: "for unavailable dates, can they be the size and font size of a button but just different bg and font color?").');
  ("A div, not a switched-off button: nothing about it is a control, so a screen reader does not announce a button that cannot be pressed.");
  let box = html_div_text(parent, text);
  app_shared_style_control(box);
  html_style_assign(box, {
    "box-sizing": "border-box",
    "text-align": "center",
    color: "#666666",
    "background-color": "rgba(0, 0, 0, 0.08)",
  });
  return box;
}
