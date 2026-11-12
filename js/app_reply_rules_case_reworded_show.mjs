import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_reply_rules_case_items_split } from "./app_reply_rules_case_items_split.mjs";
import { diff_lines_signed_positional } from "./diff_lines_signed_positional.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
export function app_reply_rules_case_reworded_show(root, approved, lines) {
  arguments_assert(arguments, 3);
  ("One test that was approved in other words, drawn as the words approved then against the words it has now, with only what differs marked.");
  ("★ A REWORDING IS CHECKED BY SEEING WHAT MOVED, NOT BY READING THE REPLY AGAIN. A change that adds one word to every blessing makes each of its tests a long prayer that looks the same as before, so a reader asked to pass it has to find the one word themselves, once per test. Drawn as a difference, the word is marked and everything else is plainly untouched.");
  ("It is drawn by the same unit as a change to the code, so a reworded line looks the same whether it is in a rule or in what a rule says.");
  let said = html_div_text(
    root,
    "what you approved before, and what it says now:",
  );
  html_style_font_size(said, "0.8em");
  let gray = app_shared_color_gray_dark();
  html_font_color_set(said, gray);
  ("The words approved are cut back into the message and its replies, so each reply is set against its own old wording whole, however many lines it runs over.");
  let before = app_reply_rules_case_items_split(approved);
  let diff = diff_lines_signed_positional(before, lines);
  app_reply_rules_diff_show(root, diff);
}
