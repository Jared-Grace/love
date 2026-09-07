import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_reply_rules_real_show(root, one) {
  arguments_assert(arguments, 2);
  ("The message a person really sent that a written-down case was drawn from, and what the rules say back to it as they stand today.");
  ("★ THE REWRITTEN MESSAGE IS WHAT THE RULES ARE TESTED ON AND THE REAL ONE IS WHAT THEY ARE JUDGED ON. Whether a reply is the right thing to send is a question about somebody who wrote to you, and every part of the rewrite that makes it safe to keep in a public repo is a part of what made it that person. So both are on the screen, one under the other, and the reader can see at a glance whether the case still stands for what it was drawn from.");
  ("A case standing for nothing says so plainly rather than being left blank. A blank line reads as something that failed to load, and this is not a failure - a case can be written for a message that has not arrived.");
  ("What it gets today is said in words rather than shown as another pair of bubbles. Two more bubbles per case would double the height of the screen to repeat, in most cases, what the bubbles above already say; the reader wants the difference, and the difference fits on one line.");
  let real = property_get(one, "real");
  let gray = app_shared_color_gray_dark();
  function said_line(text) {
    let line = html_p_text(root, text);
    html_style_font_size(line, "0.7em");
    html_font_color_set(line, gray);
    return line;
  }
  if (not(real)) {
    let none = said_line("written for a message nobody has sent yet");
    return none;
  }
  let real_message = property_get(real, "message");
  let drawn_from = text_combine_multiple(["drawn from: ", real_message]);
  said_line(drawn_from);
  let answered = property_get(real, "answered");
  if (not(answered)) {
    let quiet = said_line("today the rules have nothing for it");
    return quiet;
  }
  let outputs = property_get(real, "outputs");
  let joined = list_join_space(outputs);
  let today = text_combine_multiple(["today it gets: ", joined]);
  let got = said_line(today);
  return got;
}
