import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { json_equal } from "./json_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_reply_rules_real_show(root, one) {
  arguments_assert(arguments, 2);
  ("The message a person really sent that a written-down case was drawn from, and what the rules say back to it as they stand today.");
  ("★ THE REWRITTEN MESSAGE IS WHAT THE RULES ARE TESTED ON AND THE REAL ONE IS WHAT THEY ARE JUDGED ON. Whether a reply is the right thing to send is a question about somebody who wrote to you, and every part of the rewrite that makes it safe to keep in a public repo is a part of what made it that person. So both are on the screen, one under the other, and the reader can see at a glance whether the case still stands for what it was drawn from.");
  ("Where the rewrite changed nothing the two texts are the same words, so it says so instead of printing them twice. A message with no name, city or street in it survives rewriting untouched, and most of them do; printed both times, the ones that did change would be sitting in a column of lines that all look alike.");
  ("What the real message gets is said in words rather than shown as another pair of bubbles. Two more bubbles per case would double the height of the screen to repeat, in most cases, what the bubbles above already say; the reader wants the difference, and the difference fits on one line.");
  ("It says what is there and passes no judgment on it, because whether a difference between these two is good news or bad depends on which screen is being read. On a change waiting to be approved a difference is the change working; on the corpus it is a rule keyed on one person. Only the caller knows which, so only the caller says so.");
  ("A case standing for nothing says so plainly rather than being left blank. A blank line reads as something that failed to load, and this is not a failure - a case can be written for a message that has not arrived.");
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
  let message = property_get(one, "message");
  let real_message = property_get(real, "message");
  let untouched = json_equal(message, real_message);
  if (untouched) {
    said_line("this is the real message, word for word");
  }
  if (not(untouched)) {
    let drawn_from = text_combine_multiple(["drawn from: ", real_message]);
    said_line(drawn_from);
  }
  let real_answered = property_get(real, "answered");
  if (not(real_answered)) {
    let quiet = said_line("the real message gets nothing today");
    return quiet;
  }
  let real_outputs = property_get(real, "outputs");
  let joined = list_join_space(real_outputs);
  let today = text_combine_multiple(["the real message gets: ", joined]);
  let got = said_line(today);
  return got;
}
