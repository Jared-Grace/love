import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
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
  let before = text_split_newline(approved);
  ("The words now are cut at every line break too, the same as the words approved, because one reply can run over several lines - a prayer opens on one line and asks on the next. Left whole, a one-word change in the asking line marks the unchanged opening line as well.");
  let joined = list_join_newline(lines);
  let after = text_split_newline(joined);
  let diff = diff_lines_signed_positional(before, after);
  app_reply_rules_diff_show(root, diff);
}
