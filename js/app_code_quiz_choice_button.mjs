import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_quiz_choice_button(parent, text, on_click) {
  "an answer the learner may pick, in the state every one of them starts in: its own full line, and the quiet gray that says nothing has been decided about it yet. What happens to it afterwards is the quiz's to say - green when it turns out to be the right one, dimmed when it does not - and those are each already said in one place too.";
  "Three quizzes were building this same button, and a fourth would have had to know that a choice is gray before it looked like the others. Made here, the fourth asks for a choice and receives one.";
  let b = app_shared_button_wide(parent, text, on_click);
  let background = app_shared_color_gray_light();
  html_style_background_color_set(b, background);
  return b;
}
